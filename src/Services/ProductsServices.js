export async function ProductsServices() {
  const response = await fetch(
    "http://www.mocky.io/v2/5b15c4923100004a006f3c07"
  );
  return await response.json();
}
