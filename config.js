// ============================================================
//  Supabase 연결 설정  (★ 여기 두 줄만 본인 값으로 바꾸면 끝)
//  Supabase 대시보드 → Project Settings → API 에서 복사
// ============================================================

const SUPABASE_URL = "https://lyculuojctqhsmhuqrdt.supabase.co";        // Project URL
const SUPABASE_ANON_KEY = "sb_publishable_0WY4_2tj6O83jVKgWW80rA_G-KIl3su"; // Publishable key

// (아래는 건드리지 마세요)
const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
