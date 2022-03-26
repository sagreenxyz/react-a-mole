import { useState } from 'react'

import moleImage from './assets/images/mole.png'
import moleHillImage from './assets/images/molehill.png'

function Mole(props) {
  // #TODO create timer to determine the lifespan of a mole
  return props.displayMole === 'true' ? <img src={moleImage} alt="Mole" /> : <></>
}

function MoleHill(props) {
  return props.displayMole === 'true' ? <></> : <img src={moleHillImage} alt="Mole" />
}

function MoleContainer() {
  const [displayMole, setDisplayMole] = useState('false')
  return (
    <>
      <Mole displayMole="false"/>
      <MoleHill displayMole="false"/>
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
