import { Outlet } from 'react-router-dom'

import Footer from './Footers.tsx'
import Header from './Header.tsx'

function App() {
  //const { data } = useFruits()

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Header />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
