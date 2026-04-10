
-- Create new table contact_Lirelia
CREATE TABLE public.contact_Lirelia (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  date_creation TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  email TEXT NOT NULL,
  nom TEXT NOT NULL,
  telephone TEXT,
  interet TEXT,
  message TEXT NOT NULL,
  source_url TEXT,
  source_tag TEXT,
  status TEXT NOT NULL DEFAULT 'received',
  brevo_response JSONB
);

-- Enable RLS
ALTER TABLE public.contact_Lirelia ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Anyone can submit" ON public.contact_Lirelia FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can read" ON public.contact_Lirelia FOR SELECT USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "No updates" ON public.contact_Lirelia FOR UPDATE USING (false);
CREATE POLICY "No deletes" ON public.contact_Lirelia FOR DELETE USING (false);

-- Drop old table
DROP TABLE IF EXISTS public.contact_requests;
