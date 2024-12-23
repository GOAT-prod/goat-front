interface AuthResponse {
  access_token: string;
  refresh_token: string;
}

interface User {
  created_at: string;
  email: string;
  id: number;
  name: string;
  updated_at: string;
}

interface DecodedToken {
  exp: number;
  role: string;
  user_id: number;
  username: string;
}
