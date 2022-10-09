
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Introduction from './Components/IntroComponent/Introduction';
import MyProjects from './Components/MyProjects/MyProjects';
import Project from './Components/Project/Project';
import SocialBar from './Components/SocialsTopBar/SocialBar';
import Fred from './img/Fred.png'

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <SocialBar/>
         <div className='row TestRow'>

            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 NameCol fullHeight'>
              <Introduction NAME="HUBUBBA"/>
            </div>

            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 BlobCol'>
                    <svg className='BlobSvg' id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="#7D26CD" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(235.837, 151.409, 12.052, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M20,-32.9C27.1,-30.4,35.1,-27.7,38.6,-22.1C42.1,-16.6,41.1,-8.3,39.6,-0.9C38.1,6.6,36.2,13.2,33.4,19.9C30.6,26.7,27,33.6,21.3,37.1C15.6,40.6,7.8,40.7,0.2,40.4C-7.4,40,-14.7,39.2,-21.9,36.5C-29,33.8,-36,29.3,-39,22.9C-42.1,16.5,-41.3,8.3,-39.8,0.9C-38.3,-6.5,-36.1,-13.1,-32.9,-19.1C-29.6,-25.2,-25.4,-30.9,-19.7,-34.3C-14.1,-37.7,-7,-38.8,-0.3,-38.2C6.4,-37.7,12.8,-35.4,20,-32.9Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" stroke="url(#sw-gradient)"></path>              </svg>
                    <img src={Fred} alt="" class="FredPic"/>
            </div>

         </div>
              <AboutMe/>
              <div className='AboutMeBody' id="AboutMe">
                <h1 className="AboutMeText">Hello, I’m Hububba. <br></br> A 16 year old who is persuing a services job for others. Always delivering high quality and beautiful work ,and the best part is.. i work for free! <br></br>  Feel free to contact me over a project or work you need done.</h1>
              </div>
              <h1 className="MyProjectsHeader">My Projects</h1>
              <div className="ProjectsRow Delay_Animation">
                <Project Title="AtomMC (Closed)" Description="Founder/Manager"/>
                <Project Title="InfiniteMC (Closed)" Description="Owner"/>
                <Project Title="PeachyMC (Closed)" Description="Admin"/>
                <Project URL="https://open.spotify.com/artist/15wb7bTi3Y1qGiOvIeZ7GM?si=LUVGn4TARh6sjFJRhnKqPA" Title="Brody Baker" Description="I am the manager for a small music artist named Brody Baker. You can find his music here"/>
                <Project Title="Reliable Services" Description="I am the manager to a very decent sized service team. I have watched this team grow substaintially and i am veru excited for the future of it"/>
              </div>
              <MyProjects/>
              <ul>
                <li className="Skill">Discord Setup</li>
                <li className="Skill">Management</li>
                <li className="Skill">Minecraft Server Management</li>
                <li className="Skill">Graphic Design</li>
              </ul> 
         </div>
      </div>
  ); 
}

export default App;
