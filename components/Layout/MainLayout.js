import { Footer, Navbar } from "../common";

const MainLayout = ({children}) => {
    return (
        <div>
          <Navbar/>
          {children}
          <Footer/>
        </div>
    )
}

export default MainLayout
