import { useState, useEffect } from "react"
export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState({})
  useEffect(() => {
    if(JSON.parse(sessionStorage.getItem("user"))){
      setCurrentUser(JSON.parse(sessionStorage.getItem("user")))
    }
  }, [])
  return currentUser
}
