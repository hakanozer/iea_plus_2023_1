import React, { useEffect, useState } from 'react'
import { IUser } from '../models/IUser'

function Dashboard() {

  const [item, setItem] = useState<IUser>()
  useEffect(()=> {
    const stData = localStorage.getItem("user")
    if ( stData !== null ) {
      const obj = JSON.parse(stData) as IUser
      console.log("çalıştım")
      setItem(obj)
    }
  }, [])

  

  return (
    <>
        <h1>Dashboard</h1>
        <h2>{item?.email}</h2>
        <h2>{item?.name}</h2>
        <h2>{item?.phone}</h2>
    </>
    
  )
}

export default Dashboard