import { z } from "zod"
import type { NextRequest } from "next/server"
import data from "../data.json"

export async function GET(
  req: NextRequest
  //   {
  //     params,
  //   }: {
  //     params: {
  //       slug: string
  //     }
  //   }
) {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network latency

  const { searchParams } = req.nextUrl

  const query = z.string().parse(searchParams.get("q"))

  const products = data.products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  )

  return Response.json(products)
}
