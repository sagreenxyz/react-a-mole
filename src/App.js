import { useState } from 'react'

import moleImage from './assets/images/mole.png'
import moleHillImage from './assets/images/molehill.png'

function Mole() {
  // #TODO create timer to determine the lifespan of a mole
  return <img src={moleImage} alt="Mole" />
}

function MoleHill() {
  return <img src={moleHillImage} alt="Mole Hill" />
}

function MoleContainer() {
  const [displayMole, setDisplayMole] = useState(false)
  return (
    <>
      <Mole />
      <MoleHill />
    </>
  )
}

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <MoleContainer />      
    </div>
  );
}

export default App;
