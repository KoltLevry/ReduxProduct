import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// lessons
import Lesson17 from './lessons/Lesson17/Lesson17';

// homeworks

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Lesson17 />
      </BrowserRouter>
    </>
  )
}

export default App
