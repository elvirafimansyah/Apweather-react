import { useEffect } from "react";
import Main from './layouts/Main'
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
function App() {
  useEffect(() => {
    document.title = "Apweather | Weather App"
  }, [])
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
