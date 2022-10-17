import './sidebar.css'

const SideBar = () => {
    return ( 
        <div className="sidebar">
            <a className="active" href="#home">Home</a>
            <a href="#">Services</a>
            <a href="#">News</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
        </div>
     );
}
 
export default SideBar;