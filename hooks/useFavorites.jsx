import { useState, useEffect } from "react"

export default function useFavorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setFavorites(JSON.parse(localStorage.getItem("favorites")) || [])
    }, 500)
  })
  return favorites
}
