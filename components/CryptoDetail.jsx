import getSymbolIcon from "./GetSymbolIcon"
import Image from "next/image"
import ReduceNumber from "./ReduceNumber"
import { ButtonFavorites } from "./ButtonFavorites"

export function CryptoDetail({ ...props }) {
  const { cryptoDetails } = props
  return (
    <>
      {Object.keys(cryptoDetails).length === 0 && <h1 className="text-center font-bold text-xl mt-5">Loading...</h1>}
      {Object.keys(cryptoDetails).length > 0 && (
        <div key={cryptoDetails.id} className="flex place-content-center mt-5">
          <div className="flex">
            <div
              className="h-48 lg:h-auto lg:w-48 flex bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 items-center justify-center"
              title={cryptoDetails.name}
            >
              <Image
                src={getSymbolIcon(cryptoDetails.nameid)}
                alt={cryptoDetails.name}
                width="100"
                height="100"
                className="rounded-full"
                layout="intrinsic"
              />
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r pr-5 flex flex-col justify-between leading-normal">
              <div className="my-4">
                <div className="text-gray-900 font-bold text-xl mb-2 text-center">
                  {cryptoDetails.name}
                </div>
                <p className="text-gray-700 text-base">
                  Precio:{" "}
                  <span className="font-semibold">
                    $ {cryptoDetails.price_usd}
                  </span>
                </p>
                <p className="text-gray-700 text-base">
                  Margen:{" "}
                  <span className="font-semibold">
                    ${" "}
                    {(
                      (cryptoDetails.price_usd *
                        cryptoDetails.percent_change_24h) /
                      100
                    ).toFixed(2)}
                  </span>
                </p>
                <p className="text-gray-700 text-base">
                  Ranking:{" "}
                  <span className="font-semibold">{cryptoDetails.rank}</span>
                </p>
                <p className="text-gray-700 text-base">
                  Símbolo:{" "}
                  <span className="font-semibold">{cryptoDetails.symbol}</span>
                </p>
                <p className="text-gray-700 text-base">
                  Change 1h:
                  <span
                    className={
                      cryptoDetails.percent_change_1h > 0
                        ? `text-green-700 font-semibold`
                        : ` text-red-600 font-semibold`
                    }
                  >
                    {cryptoDetails.percent_change_1h > 0
                      ? ` + ${cryptoDetails.percent_change_1h} %`
                      : ` ${cryptoDetails.percent_change_1h} %`}
                  </span>
                </p>
                <p className="text-gray-700 text-base">
                  Change 24h:
                  <span
                    className={
                      cryptoDetails.percent_change_24h > 0
                        ? `text-green-700 font-semibold`
                        : ` text-red-600 font-semibold`
                    }
                  >
                    {cryptoDetails.percent_change_24h > 0
                      ? ` + ${cryptoDetails.percent_change_24h} %`
                      : ` ${cryptoDetails.percent_change_24h} %`}
                  </span>
                </p>
                <p className="text-gray-700 text-base">
                  Change 7d:
                  <span
                    className={
                      cryptoDetails.percent_change_7d > 0
                        ? `text-green-700 font-semibold`
                        : ` text-red-600 font-semibold`
                    }
                  >
                    {cryptoDetails.percent_change_7d > 0
                      ? ` + ${cryptoDetails.percent_change_7d} %`
                      : ` ${cryptoDetails.percent_change_7d} %`}
                  </span>
                </p>
                <p className="text-gray-700 text-base">
                  Capital de Mercado:{" "}
                  <span className="font-semibold">
                    $ {ReduceNumber(cryptoDetails.market_cap_usd)}
                  </span>
                </p>
                <p className="text-gray-700 text-base">
                  Volumen 24h:{" "}
                  <span className="font-semibold">
                    $ {ReduceNumber(cryptoDetails.volume24)}
                  </span>
                </p>
                <div className="flex place-content-center my-3">
                  <ButtonFavorites id={cryptoDetails.id}
                   cryptoCurrency = {cryptoDetails} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
