import { useEffect } from "react";
import Layouts from './layouts/Layouts'
import { Routes, Route } from 'react-router-dom';
function App() {
  useEffect(() => {
    document.title = "Apweather | Weather App"
  }, [])
  return (
    <>
      
      <Routes>
        <Route exact path='/' element={<Layouts />} />
      </Routes>
    </>
  );
}

export default App;
