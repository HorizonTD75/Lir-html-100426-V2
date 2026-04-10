const SUPABASE_URL = 'https://prykldpnxuhfextepjjq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByeWtsZHBueHVoZmV4dGVwampxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3OTkzNjksImV4cCI6MjA4NjM3NTM2OX0.J3ilHKnuSO0fBZG3zeVGP2FQfI0hmEC9KzkkwLiUFRc';
const SHOPIFY_URL = 'https://umrhpe-ta.myshopify.com/api/2025-07/graphql.json';
const SHOPIFY_TOKEN = '1c503fb30d5c7ddbbdb2547f719ec1b6';
const COOKIE_KEY = 'lirelia_cookie_consent_v1';
const CART_KEY = 'lirelia_poc_cart_v1';

function qs(s, root = document) { return root.querySelector(s); }
function qsa(s, root = document) { return [...root.querySelectorAll(s)]; }
function toast(message, ok = true) {
  const el = document.createElement('div');
  el.className = `poc-toast ${ok ? 'ok' : 'err'}`;
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2800);
}

function initMenu() {
  const header = qs('.poc-shell-header');
  const button = qs('[data-poc-menu]');
  if (!header || !button) return;
  button.addEventListener('click', () => {
    header.setAttribute('data-menu-open', String(header.getAttribute('data-menu-open') !== 'true'));
  });
}

function injectAnalytics() {
  if (!qs('script[src*="analytics.ahrefs.com"]')) {
    const s = document.createElement('script');
    s.src = 'https://analytics.ahrefs.com/analytics.js';
    s.dataset.key = '3BzY2HAnG0uK+RQzOCQFQw';
    s.async = true;
    document.head.appendChild(s);
  }
  if (!window.clarity) {
    const s = document.createElement('script');
    s.textContent = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "w0a3r6p98n");`;
    document.head.appendChild(s);
  }
}

function initCookies() {
  const saved = localStorage.getItem(COOKIE_KEY);
  if (saved) {
    try { const c = JSON.parse(saved); if (c.analytics) injectAnalytics(); } catch {}
    return;
  }
  const banner = document.createElement('div');
  banner.className = 'poc-cookie';
  banner.innerHTML = `<div class="poc-cookie-card"><h3>Cookies</h3><p>Nous utilisons des cookies nécessaires et, avec votre accord, des cookies d'audience.</p><div class="poc-cookie-actions"><button data-c="ok">Tout accepter</button><button data-c="no">Tout refuser</button></div></div>`;
  document.body.appendChild(banner);
  const save = (analytics) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ necessary: true, analytics, marketing: analytics, date: new Date().toISOString() }));
    if (analytics) injectAnalytics();
    banner.remove();
  };
  qs('[data-c="ok"]', banner).onclick = () => save(true);
  qs('[data-c="no"]', banner).onclick = () => save(false);
}

function initAccordions() {
  qsa('[data-acc-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const panel = qs(`#${btn.getAttribute('aria-controls')}`);
      const opened = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!opened));
      panel.hidden = opened;
    });
  });
}

async function supabaseInvoke(fn, body) {
  const res = await fetch(`${SUPABASE_URL}/functions/v1/${fn}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error('Erreur serveur');
  return res.json().catch(() => ({}));
}

function initBilansForm() {
  const form = qs('#bilans-form');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const nom = (fd.get('nom') || '').toString().trim();
    const prenom = (fd.get('prenom') || '').toString().trim();
    const email = (fd.get('email') || '').toString().trim();
    const telephone = (fd.get('telephone') || '').toString().trim();
    const interet = (fd.get('bilan') || 'Bilan essentiel').toString();
    if (!nom || !prenom || !email || !telephone || !fd.get('rgpd')) return toast('Merci de compléter tous les champs', false);
    try {
      await supabaseInvoke('brevo-upsert-contact', {
        nom: `${prenom} ${nom}`,
        email, telephone, interet,
        role: fd.get('profil') || 'personne concernée',
        rgpd_ok: true,
        message: `Demande de rendez-vous pour ${interet}`,
        source_url: window.location.href,
        source_tag: 'rdv-bilan',
        brevo_list_id: 13,
      });
      form.reset();
      toast('Demande envoyée');
    } catch {
      toast('Erreur lors de l\'envoi', false);
    }
  });
}

function initClubForm() {
  const form = qs('#club-form');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const body = {
      email: (fd.get('email') || '').toString().trim(),
      prenom: (fd.get('prenom') || '').toString().trim(),
      nom: (fd.get('nom') || '').toString().trim(),
      telephone: (fd.get('telephone') || '').toString().trim(),
      type: fd.get('profile') || '',
      souhait: fd.get('session') || 'Session mensuelle gratuite',
      themes: fd.getAll('themes').join(', '),
      themePropose: (fd.get('themePropose') || '').toString().trim(),
      needZoomHelp: !!fd.get('needZoomHelp'),
      source_url: window.location.href,
      source_tag: 'SRC_club',
    };
    if (!body.nom || !body.prenom || !body.email) return toast('Nom, prénom, email requis', false);
    try {
      await supabaseInvoke('brevo-club-registration', body);
      form.reset();
      toast('Inscription envoyée');
    } catch {
      toast('Erreur inscription', false);
    }
  });
}

async function shopify(query, variables = {}) {
  const res = await fetch(SHOPIFY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error('Shopify indisponible');
  const data = await res.json();
  if (data.errors) throw new Error(data.errors[0].message || 'Shopify error');
  return data.data;
}

const PRODUCT_QUERY = `query($handle:String!){productByHandle(handle:$handle){title descriptionHtml images(first:10){edges{node{url altText}}} variants(first:20){edges{node{id title availableForSale price{amount currencyCode}}}}}}`;
const CART_CREATE = `mutation($input:CartInput!){cartCreate(input:$input){cart{id checkoutUrl lines(first:10){edges{node{id merchandise{... on ProductVariant{id}}}}}} userErrors{message}}}`;
const CART_ADD = `mutation($cartId:ID!,$lines:[CartLineInput!]!){cartLinesAdd(cartId:$cartId,lines:$lines){cart{id checkoutUrl lines(first:100){edges{node{id merchandise{... on ProductVariant{id}}}}}} userErrors{message}}}`;

function readCart() { try { return JSON.parse(localStorage.getItem(CART_KEY) || '{}'); } catch { return {}; } }
function writeCart(v) { localStorage.setItem(CART_KEY, JSON.stringify(v)); }

async function initLoupe() {
  const wrap = qs('#loupe-product');
  if (!wrap) return;
  try {
    const data = await shopify(PRODUCT_QUERY, { handle: 'loupe-de-lecture-electronique-amelie' });
    const p = data.productByHandle;
    const images = p.images.edges.map(e => e.node);
    const variants = p.variants.edges.map(e => e.node);
    const selImg = qs('#loupe-main-img');
    const thumbs = qs('#loupe-thumbs');
    const select = qs('#loupe-variant');
    const price = qs('#loupe-price');
    const addBtn = qs('#loupe-add');
    const buyBtn = qs('#loupe-buy');

    images.forEach((im, i) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'thumb';
      b.innerHTML = `<img src="${im.url}" alt="${im.altText || p.title}"/>`;
      b.onclick = () => { selImg.src = im.url; selImg.alt = im.altText || p.title; };
      thumbs.appendChild(b);
      if (i === 0 && !selImg.getAttribute('src')) { selImg.src = im.url; }
    });

    const fmt = (v) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: v.price.currencyCode }).format(parseFloat(v.price.amount));
    variants.forEach((v, i) => {
      const o = document.createElement('option');
      o.value = String(i); o.textContent = v.title;
      select.appendChild(o);
    });
    const syncVariant = () => {
      const v = variants[Number(select.value) || 0];
      price.textContent = fmt(v);
      addBtn.disabled = !v.availableForSale;
      buyBtn.disabled = !v.availableForSale;
    };
    select.onchange = syncVariant;
    syncVariant();

    const addToCart = async (openCheckout) => {
      const v = variants[Number(select.value) || 0];
      let cart = readCart();
      if (!cart.cartId) {
        const created = await shopify(CART_CREATE, { input: { lines: [{ quantity: 1, merchandiseId: v.id }] } });
        cart = { cartId: created.cartCreate.cart.id, checkoutUrl: created.cartCreate.cart.checkoutUrl };
        writeCart(cart);
      } else {
        await shopify(CART_ADD, { cartId: cart.cartId, lines: [{ quantity: 1, merchandiseId: v.id }] });
      }
      toast('Produit ajouté au panier');
      if (openCheckout) window.open(cart.checkoutUrl, '_blank');
    };

    addBtn.onclick = () => addToCart(false).catch(() => toast('Erreur panier', false));
    buyBtn.onclick = () => addToCart(true).catch(() => toast('Erreur panier', false));
  } catch {
    toast('Impossible de charger le produit Shopify', false);
  }
}

initMenu();
initCookies();
initAccordions();
initBilansForm();
initClubForm();
initLoupe();
