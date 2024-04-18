import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Link to='list'>დაკლიკე და ჩაირიცხე</Link>
      </header>
    </div>
  )
}
