
CREATE TABLE public.cookie_consents (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  visitor_id text NOT NULL,
  consent_given boolean NOT NULL,
  analytics boolean NOT NULL DEFAULT false,
  marketing boolean NOT NULL DEFAULT false,
  banner_version integer NOT NULL DEFAULT 1,
  page_url text,
  user_agent text
);

ALTER TABLE public.cookie_consents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert consent"
ON public.cookie_consents
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can read consents"
ON public.cookie_consents
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "No updates on consents"
ON public.cookie_consents
FOR UPDATE
USING (false);

CREATE POLICY "No deletes on consents"
ON public.cookie_consents
FOR DELETE
USING (false);
