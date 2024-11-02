import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button, Container, Stack } from 'react-bootstrap';
import LayoutPage from './pages/LayoutPage';

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <Container className="col-md-6 mt-5">
        <Stack gap={3} className="col-md-4 mx-auto">
          <Button onClick={() => navigate("layout")}>FlexLayout</Button>
        </Stack>
        <Routes>
          <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
          <Route path="/layout" element={<LayoutPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
