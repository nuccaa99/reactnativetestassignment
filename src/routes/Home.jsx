import React, { useContext }from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'



export const Home = () => {
  const { handleClick } = useContext(AppContext)

  return (
    <div className='App'>
      <header className='App-header'>
        <Link to='list'>
          <button onClick={handleClick}>GET DATA</button>
        </Link>
      </header>
    </div>
  )
}
