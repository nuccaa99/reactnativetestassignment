import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { useState, createContext } from 'react'
import List from './routes/List'
import arr1 from "./data/Array_1.json"
import arr2 from "./data/Array_2.json"

import { Home } from './routes/Home'

export const AppContext = createContext(null)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'list',
    element: <List />,
  },
])

function App() {
  const [data, setData] = useState([]);

  const isObjInArray = (obj, array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === obj.id) {
        return true;
      }
    }
    return false;
  }

  const handleClick = () => {
    const newArr = []
    for (let i = 0; i < arr1.length; i++) {
      if (!isObjInArray(arr1[i], newArr)) {
        newArr.push(arr1[i])
      }
    }
    for (let i = 0; i < arr2.length; i++) {
      if (!isObjInArray(arr2[i], newArr)) {
        newArr.push(arr2[i])
      }
    }
    setData(newArr);
  }
  const handleDelete = (id) => {
    setData(prevState => prevState.filter(item => item.id !== id));
  };
  return (
    <AppContext.Provider value={{ handleClick, data, handleDelete }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}

export default App
