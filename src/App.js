
import './App.css';
import Introduction from './Components/IntroComponent/Introduction';
import Fred from './img/Fred.png'

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
         <div className='row TestRow'>

            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 NameCol fullHeight'>
              <Introduction NAME="HUBUBBA"/>
            </div>

            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 BlobCol'>
                    <svg className='BlobSvg' id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(209, 19, 19, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(235.837, 151.409, 12.052, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M20,-32.9C27.1,-30.4,35.1,-27.7,38.6,-22.1C42.1,-16.6,41.1,-8.3,39.6,-0.9C38.1,6.6,36.2,13.2,33.4,19.9C30.6,26.7,27,33.6,21.3,37.1C15.6,40.6,7.8,40.7,0.2,40.4C-7.4,40,-14.7,39.2,-21.9,36.5C-29,33.8,-36,29.3,-39,22.9C-42.1,16.5,-41.3,8.3,-39.8,0.9C-38.3,-6.5,-36.1,-13.1,-32.9,-19.1C-29.6,-25.2,-25.4,-30.9,-19.7,-34.3C-14.1,-37.7,-7,-38.8,-0.3,-38.2C6.4,-37.7,12.8,-35.4,20,-32.9Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" stroke="url(#sw-gradient)"></path>              </svg>
                    <img src={Fred} alt="" class="FredPic"/>
            </div>

         </div>
      </div>
    </div>
  ); 
}

export default App;
