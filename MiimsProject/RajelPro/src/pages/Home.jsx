import {Link} from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
import ImgExemple from '/exemple.jpg'
import ImgExemple2 from '/exemple2.png'

function Home() {

    return (
      <div className="Home">
        
          <h1>
            The <span className='spanStick'>
              <div className='rectYell'></div>
              Simplest
              </span> Way to 
            <br />
            Be a <span className='span1'>Real</span> <span className='span2'>Rajal</span>
          </h1>
          <p>
            Move from <strong>chaos to clarity</strong> with Nimboard - the Free, User-Friendly Way to Organize
            <br />
            Your Tasks and Thoughts. No Subscriptions. No Fuss.
          </p>
          <Link className='middleLink'>
            Create your first board 
            <GoArrowRight />
          </Link>
          <img className='imgEx' src={ImgExemple2}/>
      </div>
    )
  }
  
  export default Home