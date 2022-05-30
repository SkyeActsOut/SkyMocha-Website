import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Projects from './projects'
import ProjectPage from './project_page';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import projects from './project_list.json'

function sortName (name) {
  return name.split(' ').join('').split('?').join('').split('!').join('');
}

function ProjectPages () {
  let list = []
  let divs = []
  projects.technical.forEach (elem => list.push(elem))
  projects.nontechnical.forEach (elem => list.push(elem))
  list.forEach (elem => {
    divs.push( <Route path={sortName(elem.name)} element={ < ProjectPage 
        name={elem.name} 
        short={elem.short}
        format={elem.format}
      /> } 
    />);
  })
  return divs;
}

function Home () {
  return (
    <React.StrictMode>

      <Header />

      <div className='project-flex'>
        <Projects technical={true} />
        <Projects technical={false} />
      </div>

    </React.StrictMode>
  )
}

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          { ProjectPages() }
          <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);