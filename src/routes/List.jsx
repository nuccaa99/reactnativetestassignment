import React, { useContext } from 'react'
import { AppContext } from '../App'

export default function List() {
  const { data, handleDelete } = useContext(AppContext)

  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.body}</p>
            <button onClick={() => {handleDelete(item.id)}}>delete</button>
          </div>
        )
      })}
    </div>

  )
}
