DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.uiux_leads;

REVOKE INSERT ON public.uiux_leads FROM anon;
REVOKE INSERT ON public.uiux_leads FROM authenticated;