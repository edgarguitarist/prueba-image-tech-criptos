import { useState, useEffect } from "react"

export const useCryptoDetails = (idCrypto) => {
  const [cryptoDetails, setCryptoDetails] = useState({})
  useEffect(() => {
    fetch(`https://api.coinlore.net/api/ticker/?id=${idCrypto}`)
      .then((response) => response.json())
      .then((json) => {
        setCryptoDetails(json[0])
      })
  })
  return cryptoDetails
}
