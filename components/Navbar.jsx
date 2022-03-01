import Link from "next/link"
import { Logo } from "./Logo"
import { UserInfo } from "./UserInfo"
import { FaHome, FaBitcoin, FaStar } from "react-icons/fa"

export function Navbar() {
  return (
    <nav className="flex flex-center w-full h-15 bg-yellow border-b-2 border-b-black bg-yellow-300 items-center justify-between fixed z-50 top-0">
      <div className="flex w-3/5 flex-center items-center justify-between">
        <Logo />
        <div className="flex content-center space-x-10 font-semibold">
          <Link href="/">
            <a className="flex items-center place-content-center">
              <FaHome className="mr-1" />
              Home
            </a>
          </Link>
          <Link href="/cryptos">
            <a className="flex items-center place-content-center">
              <FaBitcoin className="mr-1" />
              Criptomonedas
            </a>
          </Link>
          <Link href="/cryptos/favorites">
            <a className="flex items-center place-content-center">
              <FaStar className="mr-1" />
              Favoritos
            </a>
          </Link>
        </div>
      </div>
      <div className="content-center">
        <UserInfo />
      </div>
    </nav>
  )
}
