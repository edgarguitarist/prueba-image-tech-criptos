import getSymbolIcon from "../components/GetSymbolIcon"
import Image from "next/image"
import { ButtonFavorites } from "./ButtonFavorites"
import { ButtonDetail } from "./ButtonDetail"

export default function Crypto({...props}) {
  const { id, crypto } = props
  return (
    <>
      {
        <div
          key={id}
          className="my-1 px-1 w-full sm:w-1/3 sm:px-4 md:w-1/4 lg:my-4 lg:px-4 lg:w-1/5"
        >
          <article className="overflow-hidden rounded-lg shadow-lg">
            <a
              href={`/cryptos/details/${crypto.id}`}
              className="flex place-content-center"
            >
              <Image
                src={getSymbolIcon(crypto.nameid)}
                alt={crypto.name}
                width="100"
                height="100"
                className="rounded-full"
                layout="intrinsic"
              />
            </a>
            <header className="  p-1 md:p-4">
              <h1 className="text-lg flex place-content-center font-bold">
                <a
                  className="no-underline hover:no-underline hover:text-gray-800 text-black"
                  href={`/cryptos/details/${crypto.id}`}
                >
                  {crypto.name}
                </a>
              </h1>
              <p className="ml-2 text-sm flex place-content-center font-semibold">
                <span className="text-gray-800 mr-1">Precio:</span> ${" "}
                {crypto.price_usd}
              </p>
            </header>

            <footer className="flex justify-between mx-1 leading-none pb-4 px-4">
              <ButtonDetail id={crypto.id} />
              <ButtonFavorites id={crypto.id} cryptoCurrency={crypto} />
            </footer>
          </article>
        </div>
      }
    </>
  )
}
