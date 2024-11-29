import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://sjepxfrndvhkdqdzgpuf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqZXB4ZnJuZHZoa2RxZHpncHVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2ODY5NTUsImV4cCI6MjA0ODI2Mjk1NX0.o1OahOVm_V7hHKoFaZTV9e9V7DVf3PTpwGfWqzC2pKc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
