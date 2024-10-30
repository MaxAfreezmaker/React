import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import NotFound from './pages/NotFound';

import RootLayout from './layout/RootLayout'
import SimpleLayout from './layout/SimpleLayout'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RootLayout>
          <Routes>
              <Route path="/Home" element={<Home/>}></Route>
              <Route path="/Lab1" element={<Lab1/>}></Route>
              <Route path="/Lab2" element={<Lab2/>}></Route>
              <Route path="/*" element={<NotFound/>}></Route>
          </Routes>
          <SimpleLayout>
              <p>content</p>
          </SimpleLayout>
      </RootLayout>
    </>
  );
}

export default App
