import { useEffect } from "react";
import Main from './layouts/Main'
import { Routes, Route } from 'react-router-dom';
function App() {
  useEffect(() => {
    document.title = "Apweather | Weather App"
  }, [])
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
