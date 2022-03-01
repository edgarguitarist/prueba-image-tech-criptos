import { useState, useEffect } from "react"

const fetchData = async () => {
  const response = await fetch("https://randomuser.me/api/")
  const json = await response.json()
  return json.results[0]
}

export const useUser = () => {
  const [user, setUser] = useState({})
  useEffect(() => {
    if (!sessionStorage.getItem("user")) {
      fetchData().then((data) => {
        setUser(data)
        sessionStorage.setItem("temp_user", JSON.stringify(data))
      })
    }else{
        setUser(JSON.parse(sessionStorage.getItem("user")))
    }
  },[])
  return user
}

