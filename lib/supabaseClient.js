import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const hasSupabase = Boolean(url && anonKey);

// Only create a client when configured; otherwise the app runs in local demo mode.
export const supabase = hasSupabase ? createClient(url, anonKey) : null;
