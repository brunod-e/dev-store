import data from "../data.json"

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network latency

  const featuredProducts = data.products.filter((product) => product.featured)

  return Response.json(featuredProducts)
}
