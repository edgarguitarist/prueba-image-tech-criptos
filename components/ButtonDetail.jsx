import Link from "next/link"
import { FaFileAlt } from "react-icons/fa"

export function ButtonDetail({ ...props }) {
  const { id } = props
  return (
    <>
      <button>
        <Link href={`/cryptos/details/${id}`}>
          <a className="flex items-center rounded-full bg-yellow-300 py-1 px-2 font-semibold text-sm hover:opacity-90">
            <FaFileAlt className="mr-1" />
            Detalle
          </a>
        </Link>
      </button>
    </>
  )
}
