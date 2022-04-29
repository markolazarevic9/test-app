import { useNavigate, useLocation} from 'react-router-dom'

export default function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
              <ul className="menu">
                <li><a onClick={() => navigate("/")} className={location.pathname === "/" ? "activePage" : ""}>Home</a></li>
                <li><a onClick={() => navigate("/about-us")} className={location.pathname === "/about-us" ? "activePage" : ""}>About us</a></li>
                <li><a onClick={() => navigate("/contact")} className={location.pathname === "/contact" ? "activePage" : ""}>Contact</a></li>
             </ul>    
        </>
                      
    )
}