import { useState } from 'react'

import moleImage from './assets/images/mole.png'
import moleHillImage from './assets/images/molehill.png'

function Mole(props) {
  // #TODO create timer to determine the lifespan of a mole
  // #TODO a useEffect() hook to start timer and clean it up afterward - does this go in the MoleContainer component?
  return props.displayMole === 'true' ? <img src={moleImage} alt="Mole" /> : <></>
}

function MoleHill(props) {
  // #TODO a useEffect() hook to start timer and clean it up afterward - does this go in the MoleContainer component?
  return props.displayMole === 'true' ? <></> : <img src={moleHillImage} alt="Mole" />
}

function MoleContainer() {
  const [displayMole, setDisplayMole] = useState('false')

  const handleClick = () => {
    // #TODO increment score by 1 and immediately set the clicked-on mole to no longer display (passing prop to Mole components)
  }

  // #TODO some logic to determine which child to render - does this go in the return below?

  return (
    <>
      <Mole displayMole="false"/>
      <MoleHill displayMole="false"/>
    </>
  )
}

function App() {
  const [score, setScore] = useState(0);

  const generateMoleContainers = () => {
    // #TODO create 9 mole containers
  }

  return (
    <div className="App">
      <MoleContainer />      
    </div>
  );
}

export default App;
