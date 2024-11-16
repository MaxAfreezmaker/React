import { useState } from 'react'
import './App.css'
import { useReducer } from 'react'

import RootLayout, {menuItems} from './layout/RootLayout'
import SimpleLayout from './layout/SimpleLayout'
import { Routes, Route } from 'react-router-dom'
import AppContext from './data/AppContext'
import AppReducer from './data/AppReducer'

function App() {
  const [count, setCount] = useState(0)
  const [state, appDispatch] = useReducer(AppReducer)

  return (
    <>
    <AppContext.Provider value={{items: state,dispatch:appDispatch}}>
      <RootLayout>
          <Routes>
            {menuItems.map((item)=> (
              <Route key={item.id} path={item.urlPattern} element={item.element}/>
            ))}
          </Routes>

          <SimpleLayout>
              <p></p>
          </SimpleLayout>
      </RootLayout>
    </AppContext.Provider>
    </>
  );
}

export default App
