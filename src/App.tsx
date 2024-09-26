
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './views/landingpage/LandingPage'
import HeaderComponent from './components/headercomponent/HeaderComponent'
import BookShelfPage from './views/bookshelf/BookShelfPage'

function App() {


  return (
    <body>
      <HeaderComponent />
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/bookshelf' element={<BookShelfPage />} />
        </Routes>
      </Router>
    </body>
  )
}

export default App
