import Image from "next/image"
import { useCurrentUser } from "../hooks/useCurrentUser"
import getCountry from "./GetCountry"

export function UserInfo() {
  const user = useCurrentUser()

  return (
    <>
      {Object.keys(user).length > 0 && 
        <div className="flex items-center mr-10">
          <Image
            src={user.picture.large}
            alt={user.login.username}
            width="50"
            height="50"
            className="rounded-full"
            layout="intrinsic"
          />
          <div className="text-sm ml-3">
            <p className="font-semibold">Bienvenido {user.name.first + " " + user.name.last} de {getCountry(user.nat)}</p>
          </div>
        </div>
      }
    </>
  )
}
