
-- Add new columns to contact_requests table
ALTER TABLE public.contact_requests
  ADD COLUMN IF NOT EXISTS topic text,
  ADD COLUMN IF NOT EXISTS full_name text,
  ADD COLUMN IF NOT EXISTS telephone text,
  ADD COLUMN IF NOT EXISTS source_url text,
  ADD COLUMN IF NOT EXISTS source_tag text,
  ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'received',
  ADD COLUMN IF NOT EXISTS brevo_response jsonb;
