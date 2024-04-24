import {Link} from 'react-router-dom'
import Logo from '/guerrier.png'
import { GoArrowRight } from "react-icons/go";
function Navbar() {

  return (
    <div className="Navbar">
        <Link className='logo' to='/'>
            <img src={Logo}/>
            <h3>RajalThor</h3>
        </Link>
        <nav>
            <ul>
                <Link to='/' className='link1'>Home</Link>
                <Link to='/signin' className='link2'>Sign in</Link>
                <Link to='/p' className='link3'>
                    Sign up 
                    <GoArrowRight />
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar