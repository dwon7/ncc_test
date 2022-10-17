import Content from "../content/Content";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import './main.css'

const Main = () => {
    return ( 
        <div className="main">
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
            
        </div>
     );
}
 
export default Main;