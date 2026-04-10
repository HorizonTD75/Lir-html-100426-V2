
-- Create contact_requests table
CREATE TABLE public.contact_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  selected_product TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form, no auth required)
CREATE POLICY "Anyone can submit a contact request"
  ON public.contact_requests
  FOR INSERT
  WITH CHECK (true);

-- No SELECT/UPDATE/DELETE for anonymous users - data is only accessible via backend
