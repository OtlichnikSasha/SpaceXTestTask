import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import {useRoutes} from './routes.js'
import {Header} from "./components/Header";

function App() {
  const routes = useRoutes()
  return (
        <Router>
            <Header/>
            {routes}
        </Router>
  );
}

export default App;
