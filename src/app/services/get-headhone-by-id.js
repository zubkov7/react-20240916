export async function getHeadphoneById(headphoneId) {
  const result = await fetch(
    `http://localhost:3001/api/product/${headphoneId}`
  );

  return result.json();
}
