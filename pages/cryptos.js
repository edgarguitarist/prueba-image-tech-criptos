import { CryptoCurrencies } from "../components/Cryptocurrencies"
import PageLayout from "../components/PageLayout"
import { useCryptos } from "../hooks/useCryptos"

export default function Cryptos() {
  const {cryptos} = useCryptos()
  return (
    <PageLayout title="Criptomonedas" principal ="Criptomonedas" fondo={true}>
      <CryptoCurrencies
        cryptos={cryptos}
      />
    </PageLayout>
  )
}
