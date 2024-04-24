import {Link} from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
import ImgExemple from '/exemple.jpg'
import ImgExemple2 from '/exemple2.png'
import GigaChad from '/gigachad.webp'
import { IoMdStar } from "react-icons/io";
 
function Home() {

    return (
      <div className="Home">
        
          <h1 className='title'>
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

          <div className="cards">
            <div className='card'>
                <Link className='giga'>
                  <img src={GigaChad}/>
                </Link>
              <div className='stars'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
              <p>“Nimboard is the best tool for decluttering my mind when preparing for essays and projects.”</p>
              <h3>
                Giga Chad
                <br />
                <span>
                  Le plus grand de tout les Chads
                </span>
              </h3>
            </div>
            <div className='card'>
                <Link className='giga'>
                  <img src={GigaChad}/>
                </Link>
              <div className='stars'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
              <p>“Nimboard is the best tool for decluttering my mind when preparing for essays and projects.”</p>
              <h3>
                Giga Chad
                <br />
                <span>
                  Le plus grand de tout les Chads
                </span>
              </h3>
            </div>
            <div className='card'>
                <Link className='giga'>
                  <img src={GigaChad}/>
                </Link>
              <div className='stars'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
              <p>“Nimboard is the best tool for decluttering my mind when preparing for essays and projects.”</p>
              <h3>
                Giga Chad
                <br />
                <span>
                  Le plus grand de tout les Chads
                </span>
              </h3>
            </div>
          </div>
      </div>
    )
  }
  
  export default Home