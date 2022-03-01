import { useState, useEffect } from "react"

export const useCryptos = () => {
  const [cryptos, setCryptos] = useState({})
  useEffect(() => {
    fetch("https://api.coinlore.net/api/tickers/?start=1&limit=50")
      .then((response) => response.json())
      .then((json) => {
        setCryptos(json.data)
      })
  }, [])
  return cryptos
}
