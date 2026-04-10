-- Replace overly permissive INSERT policy with a constrained one
DROP POLICY IF EXISTS "Anyone can submit" ON public.contact_lirelia;

CREATE POLICY "Anyone can submit"
ON public.contact_lirelia
FOR INSERT
TO anon, authenticated
WITH CHECK (
  status = 'received'
  AND brevo_response IS NULL
);