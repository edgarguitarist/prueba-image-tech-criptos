import Crypto from "./Crypto"
import Link from "next/link"
import { FaBitcoin } from "react-icons/fa"
import useFavorites from "../hooks/useFavorites"

export default function MyFavorites() {
  const favorites = useFavorites()

  return (
    <>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4 place-content-center">
          {favorites.length === 0 && (
            <>
              <h1 className="font-bold text-xl mr-3">
                No tienes Favoritos aun, revisa las
              </h1>
              <button>
                <Link href={`/cryptos`}>
                  <a className="flex items-center rounded-full bg-yellow-300 py-1 px-2 font-semibold text-sm hover:opacity-90">
                    <FaBitcoin className="mr-1" />
                    Criptomonedas
                  </a>
                </Link>
              </button>
            </>
          )}
          {favorites.length > 0 &&
            favorites.map((crypto) => (
              <Crypto key={crypto.id} crypto={crypto} />
            ))}
        </div>
      </div>
    </>
  )
}
