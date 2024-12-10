interface AuthResponse {
  access: string;
  refresh: string;
}

interface User {
  created_at: string;
  email: string;
  id: number;
  name: string;
  updated_at: string;
}
