INSERT INTO storage.buckets (id, name, public) VALUES ('documents', 'documents', true) ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public read access" ON storage.objects FOR SELECT TO public USING (bucket_id = 'documents');