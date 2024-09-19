
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './views/landingpage/LandingPage'
import HeaderComponent from './components/headercomponent/HeaderComponent'

function App() {


  return (
    <body>
      <HeaderComponent />
      <Router>
        <Routes>

          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Router>
    </body>
  )
}

export default App
