import Link from "next/link"
import { useCurrentUser } from "../hooks/useCurrentUser"
export function ButtonLogin() {
  const user = useCurrentUser()
  return (
    <>
      {Object.keys(user).length === 0 && (
        <button onClick={selectUser}>
          <Link href="/cryptos">
            <a className="rounded-full bg-yellow-300 py-2 px-4 font-semibold">
              Siguiente
            </a>
          </Link>
        </button>
      )}
      {Object.keys(user).length > 0 && (
        <button onClick={deleteUser}>
          <Link href="/">
            <a className="rounded-full bg-yellow-300 py-2 px-4 font-semibold">
              Cambiar usuario
            </a>
          </Link>
        </button>
      )}
    </>
  )
}

const selectUser = () => {
  const user = JSON.parse(sessionStorage.getItem("temp_user"))
  sessionStorage.removeItem("temp_user")
  sessionStorage.setItem("user", JSON.stringify(user))
}

const deleteUser = () => {
  sessionStorage.removeItem("user")
  localStorage.removeItem("favorites")
  window.location.reload()
}
