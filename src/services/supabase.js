import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gmoivfhlcnvodzoetbzy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdtb2l2ZmhsY252b2R6b2V0Ynp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk3ODQyODYsImV4cCI6MjAzNTM2MDI4Nn0.8fhyZTv9ifeg-Fuil2AQLAQY5_bYZ_XcfCYHOYkIm-k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
