export async function fetchRecommendations(ingredients: string[]) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/recommend`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ingredients }),
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch recommendations');
  }
  return res.json();
}
