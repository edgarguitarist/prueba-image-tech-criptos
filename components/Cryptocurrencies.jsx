import { useCryptos } from "../hooks/useCryptos"
import Crypto from "./crypto"

export function CryptoCurrencies (){
  
  const cryptos = useCryptos()

  return(
    <>
    <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4 place-content-center">
          {Object.keys(cryptos).length === 0 && <h1 style={{height: "100vh"}} className="font-bold text-xl">Loading...</h1>}
          {Object.keys(cryptos).length > 0 &&
            cryptos.map((crypto) => (
              <Crypto 
                key={crypto.id}
                crypto = {crypto}
              />
            ))}
        </div>
      </div>
    </>
  )
}

