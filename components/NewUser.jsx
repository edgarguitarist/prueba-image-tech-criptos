import Image from "next/image"
import { ButtonLogin } from "./ButtonLogin"
import { useUser } from "../hooks/useUser"
import getCountry from "./GetCountry"

export function NewUser() {
  const user = useUser()
  return (
    <div className="flex place-content-center w-full mt-10">
      {Object.keys(user).length === 0 && <h1>Loading...</h1>}
      {Object.keys(user).length > 0 &&        
          <div
            key={user.login.uuid}
            className="max-w-lg rounded overflow-hidden shadow-lg"
          >
            <Image
              src={user.picture.large}
              alt={user.login.username}
              width="100"
              height="100"
              quality={100}
              layout="responsive"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-center text-xl mb-2">
                {user.name.first + " " + user.name.last}
              </div>
              <div className="font-semibold text-center text-l mb-2">
                {user.email}
              </div>
              <div className="text-center text-l mb-2">
                {getCountry(user.nat)}
              </div>
            </div>
            <div className="px-6 pt-1 pb-4 flex place-content-center">
              <ButtonLogin />
            </div>
          </div>
        }
    </div>
  )
}


