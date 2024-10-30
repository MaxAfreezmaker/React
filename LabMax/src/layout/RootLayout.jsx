import React from 'react';
import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Lab1 from '../pages/Lab1';
import Lab2 from '../pages/Lab2';


const menuItems = [
  { id: 1, label: 'Home', urlPattern: '/home', element: <Home /> },
  { id: 2, label: 'Lab1', urlPattern: '/lab1', element: <Lab1 /> },
  { id: 3, label: 'Lab2', urlPattern: '/lab2', element: <Lab2 /> }
];

function RootLayout({ children }) {
  return (
    <div>
      <NavBarMenu items={menuItems} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export { menuItems };
export default RootLayout;
