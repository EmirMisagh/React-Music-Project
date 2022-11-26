import {NavLink} from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    return ( 
        <>
        <nav className="ps-4 navbar navici  navbar-expand-md">
            <div className="container-fluid ">
                <h3 className='ms-0 ms-md-1'><NavLink  to="/">KURDSONG</NavLink></h3>
                <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="/musics" to="#">Music</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="/playlist" to="#">Playlist</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link " to="#" >
                        MusicVideo
                    </NavLink>
                    
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Catagory
                    </a>
                    <ul id='#' className="dropdown-menu serach-menu">
                        <li><NavLink className="dropdown-item"  to="#">POP</NavLink></li>
                        <li><NavLink className="dropdown-item" to="#">ENERGY</NavLink></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink to='#' className="nav-link work">Add work +</NavLink>
                    
                    </li>
                </ul>
                
                </div>
            
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;