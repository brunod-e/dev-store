import Link from "next/link"
import Image from "next/image"

export default async function Search() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Resultados para: <span className="font-semibold">moletom</span>
      </p>
      <div className="grid grid-cols-3 gap-6">
        <Link
          href={`/product/teste`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
        >
          <Image
            src=""
            width={480}
            height={480}
            quality={100}
            className="group-hover:scale-105 transition-transform duration-500"
            alt=""
          />
          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">teste</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(129).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
