import { useState } from 'react'
import './App.css'


import RootLayout, {menuItems} from './layout/RootLayout'
import SimpleLayout from './layout/SimpleLayout'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
    </>
  );
}

export default App
