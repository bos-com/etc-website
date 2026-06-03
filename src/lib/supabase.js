import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dlunpgcepbecagzouyri.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsdW5wZ2NlcGJlY2Fnem91eXJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNzYwMzIsImV4cCI6MjA5NTY1MjAzMn0.VRto93D8hmgXSk-jLQHy9O-1LFbHGN-vQY2zD0WKFd8";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);