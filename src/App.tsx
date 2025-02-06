import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
      </BrowserRouter>
    </>
  )
}

export default App
