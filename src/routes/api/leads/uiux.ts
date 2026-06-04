import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const LeadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  mobile: z
    .string()
    .trim()
    .min(7, "Enter a valid mobile number")
    .max(20)
    .regex(/^[0-9+\-()\s]+$/, "Invalid mobile number"),
  email: z.string().trim().email("Invalid email address").max(255),
  current_status: z.string().trim().max(120).optional().nullable(),
  preferred_mode: z.string().trim().max(120).optional().nullable(),
  utm_source: z.string().trim().max(255).optional().nullable(),
  utm_medium: z.string().trim().max(255).optional().nullable(),
  utm_campaign: z.string().trim().max(255).optional().nullable(),
  utm_term: z.string().trim().max(255).optional().nullable(),
  utm_content: z.string().trim().max(255).optional().nullable(),
  referrer: z.string().trim().max(1024).optional().nullable(),
  current_page_url: z.string().trim().max(1024).optional().nullable(),
  landing_path: z.string().trim().max(1024).optional().nullable(),
  user_agent: z.string().trim().max(1024).optional().nullable(),
});

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const Route = createFileRoute("/api/leads/uiux")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return json({ success: false, error: "Invalid JSON body" }, 400);
        }

        const parsed = LeadSchema.safeParse(payload);
        if (!parsed.success) {
          return json(
            { success: false, error: parsed.error.issues[0]?.message ?? "Validation failed" },
            422,
          );
        }

        const { error } = await supabaseAdmin.from("uiux_leads").insert(parsed.data);

        if (error) {
          console.error("[leads/uiux] insert failed:", error.message);
          return json({ success: false, error: "Could not save your enquiry. Please try again." }, 500);
        }

        return json({ success: true, message: "Enquiry received" }, 200);
      },
    },
  },
});
