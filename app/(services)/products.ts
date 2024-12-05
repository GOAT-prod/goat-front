const BASE = 'https://storage-service-production.up.railway.app';

const headers = {
  headers: {
    Authorization: process.env.NEXT_PUBLIC_AUTH_KEY || '',
  },
};

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE}/products?limit=5&page=0`, headers);
  return res.json();
}

export async function getProduct(id: number): Promise<Product> {
  const res = await fetch(`${BASE}/product/${id}`, headers);
  return res.json();
}
