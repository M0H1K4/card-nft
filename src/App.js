import './App.css';
import image from './image-equilibrium.jpg'
import avatar from './image-avatar.png'
import icon from './icon-view.svg'
import iconEth from './icon-ethereum.svg'
import iconDay from './icon-clock.svg'

function App() {
  return (
    
    <body>
    <div className="App">
      <div class = "picture">
        <img class = "foto" src={image} alt="image" />
          <div class="hover">
            <img class="eye" src={icon} />
          </div>
      </div>
  
      <h1
          className = "App-title" 
          >Equilibrium #3429
      </h1>
          <h3>Our Equilibrium collection promotes balance and calm.</h3>
      <div class = "container">
        <div class = "eth">
        <img class = "ethIcon" src = {iconEth}/>
        <h4 class = "txtEth">0.041 ETH</h4>
        </div>

        <div class = "days">
        <img  src = {iconDay}/>
        <h4 class = "three">3 days left</h4>
        </div> 
      </div>
        
      <div class = "line"></div>    

      <div class = "profile">
          <img class = "avatar" src={avatar} alt ="image" />
          <h3 class = "creation">Creation of</h3>
          <p>Jules Wyvern</p>
      </div>
    </div> 
    </body> 
  )
}

export default App;
