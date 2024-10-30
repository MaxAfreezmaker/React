import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import NotFound from './pages/NotFound';

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
              <p>content</p>
          </SimpleLayout>
      </RootLayout>
    </>
  );
}

export default App
