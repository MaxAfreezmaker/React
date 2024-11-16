import React from 'react';
import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Lab1 from '../pages/Lab1';
import Lab2 from '../pages/Lab2';
import Lab3 from '../pages/Lab3';
import Lab4 from '../pages/Lab4';
import EditForm from '../components/EditForm';
import CreateForm from '../components/CreateForm';


const menuItems = [
  { id: 1, label: 'Home', urlPattern: '/home', element: <Home /> },
  { id: 2, label: 'Lab1', urlPattern: '/lab1', element: <Lab1 /> },
  { id: 3, label: 'Lab2', urlPattern: '/lab2/', element: <Lab2 /> },
  { id: 4, label: 'Lab3', urlPattern: '/lab3/', element:<Lab3/>},
  { id: 5, label: 'Lab4', urlPattern: '/lab4/', element:<Lab4/>},
  { id: 6, urlPattern: '/lab4/edit', element:<EditForm/>},
  { id: 7, urlPattern: '/lab4/add', element:<CreateForm/>}
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
