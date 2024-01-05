import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Header/Navbar'
import AppRoutes from './Components/Routes/AppRoutes'
import Categories from './Components/Pages/Categories'

function App() {

  return (
    <>
      <div className="container pt-2">
        <div className="row">
          <div className="col-12">
            <Navbar />
          </div>
          <div className="col-12 pt-2">
            <div className="row home p-0 m-0">
              <div className="col-12 col-md-3 category">
                <Categories/> 
              </div>
              <div className="col-12 col-md-9 product">
                <AppRoutes></AppRoutes>
              </div>
              <div className="footer bg-dark my-2">
                footer
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )

}

export default App
