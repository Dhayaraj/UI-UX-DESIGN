CREATE TABLE public.uiux_leads (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  mobile text NOT NULL,
  email text NOT NULL,
  current_status text,
  preferred_mode text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  referrer text,
  current_page_url text,
  landing_path text,
  user_agent text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.uiux_leads TO anon;
GRANT INSERT ON public.uiux_leads TO authenticated;
GRANT ALL ON public.uiux_leads TO service_role;

ALTER TABLE public.uiux_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON public.uiux_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);