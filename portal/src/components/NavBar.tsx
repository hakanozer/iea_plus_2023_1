import React, { useEffect, useState } from 'react'
import { getAllCats } from '../Api'
import { NavLink } from 'react-router-dom'

function NavBar() {

  const [cats, setCats] = useState<string[]>([])
  useEffect(() => {
    getAllCats().then( res => {
      const dt = res.data
      if (dt) {
          setCats(dt)
      }
    })
  }, [])

  const firstUpper = (word:string) => {
    const firstLetter = word.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = word.slice(1)
    var capitalizedWord = firstLetterCap + remainingLetters
    capitalizedWord = capitalizedWord.replaceAll("-", " ");
    return capitalizedWord;
  }
  

  return (
    <>
    <nav className="headerNav navbar navbar-expand-sm bg-body-dark">
    <div className="container-fluid">
        <div className="navbar-brand d-sm-none" >Kategoriler</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            { cats.map((item, index) => 
              <NavLink key={index} to={'/category/'+item} className='nav-link'>{firstUpper(item)}</NavLink>
            )}
        </div>
        </div>
    </div>
    </nav>
    </>
  )
}

export default NavBar