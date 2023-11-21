"use client"

import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { FormEvent } from "react"

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get("q")

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q as string

    if (!query) {
      return null
    }

    router.push(`/search?q=${query}`)
  }
  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="w-5 h-6 text-zinc-500" size={24} />
      <input
        name="q"
        type="text"
        defaultValue={query ?? ""}
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent outline-none text-sm outine-none placeholder:text-zinc-500"
      />
    </form>
  )
}
