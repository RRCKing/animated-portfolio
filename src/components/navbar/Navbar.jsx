import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <span>Dev</span>
                <div className="social">
                    <a href="#"><img src="/facebook.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar