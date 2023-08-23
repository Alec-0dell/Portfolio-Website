import { Route, Routes } from 'react-router-dom'
import Home from "./Components/Home/Home";
import AboutMe from './Components/AboutMe/AboutMe';
import Layout from './Components/Layout/Layout';
import Resume from './Components/Resume/Resume';
import CodingProjects from './Components/CodingProjects/CodingProjects';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="about" element={<AboutMe/>} />
          <Route path="resume" element={<Resume/>} />
          <Route path="CodingProjects" element={<CodingProjects/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
