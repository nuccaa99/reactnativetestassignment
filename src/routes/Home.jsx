import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'

export const Home = () => {
  const { state, setState } = useContext(AppContext)
  return (
    <div className='App'>
      <header className='App-header'>
        <Link to='list'>{state}</Link>
      </header>
    </div>
  )
}
