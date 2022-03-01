import { FaRegStar, FaStar } from "react-icons/fa"
import useFavorites from "../hooks/useFavorites"

export function ButtonFavorites({ ...props }) {
  const { id, cryptoCurrency } = props
  const favorites = useFavorites()
  function handleClickAdd() {
    handleFavorites(id, cryptoCurrency)
  }
  return (
    <>
      {favorites.find((favorite) => favorite.id === id) ? (
        <button
          onClick={handleClickAdd}
          className="flex items-center rounded-full bg-yellow-300 py-1 px-2 font-semibold text-sm hover:opacity-90"
        >
          <FaRegStar className="mr-1" /> <span id={id}>Quitar</span>
        </button>
      ) : (
        <button
          onClick={handleClickAdd}
          className="flex items-center rounded-full bg-yellow-300 py-1 px-2 font-semibold text-sm hover:opacity-90"
        >
          <FaRegStar className="mr-1" /> <span id={id}>Favorito</span>
        </button>
      )}
    </>
  )
}

function handleFavorites(id, cryptoCurrency) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || []
  const index = favorites.findIndex((favorite) => favorite.id === id)
  const span = document.getElementById(id)
  const user = JSON.parse(sessionStorage.getItem("user")) || {}
  let newFavorites
  console.log(user)
  if(sessionStorage.getItem("user")){
    if (index === -1) {
      newFavorites = [...favorites, cryptoCurrency]
      localStorage.setItem("favorites", JSON.stringify(newFavorites))
      span.innerHTML = `Quitar`
    } else {
      newFavorites = favorites.filter((favorite) => favorite.id !== id)
      localStorage.setItem("favorites", JSON.stringify(newFavorites))
      span.innerHTML = `<FaStar className="mr-1" /> <span id=${id}>Favorito</span>`
    }
  }else{
    //mostrar una notificacion
    alert("Debes elegir un usuario para poder agregar favoritos")
  }
  
}
