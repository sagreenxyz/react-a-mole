import { useState } from 'react'

import moleImage from './assets/images/mole.png'
import moleHillImage from './assets/images/molehill.png'

function Mole(props) {
  // #TODO create timer to determine the lifespan of a mole
  // #TODO a useEffect() hook to start timer and clean it up afterward - does this go in the MoleContainer component?
  return <img src={moleImage} alt="Mole" style={{width: '75px'}} onClick={props.handleClick} />
}

function EmptySlot(props) {
  // #TODO a useEffect() hook to start timer and clean it up afterward - does this go in the MoleContainer component?
  return <img src={moleHillImage} alt="Mole Hill" style={{width: '75px'}} />
}

function MoleContainer(props) {
  const [displayMole, setDisplayMole] = useState(true)

  const handleClick = () => {
    props.setScore(props.score + 1)
    setDisplayMole(false)
  }

  const moleOrEmptySlot = () => {
    return displayMole ? <Mole displayMole={displayMole} handleClick={handleClick}/> : <EmptySlot displayMole={displayMole}/>
  }
  return (<>{moleOrEmptySlot()}</>)
}

function App(){
  let [score, setScore] = useState(0)

  const createEmptySlot = () => {
      let hills = []
      for (let i = 0; i < 9; i++) {
          hills.push(<MoleContainer key={i} setScore={setScore} score={score} />)
      }
      return (<div>{hills}</div>)
  }

  return (
      <div className="App">
          <h1>React-a-Mole!</h1>
          {score}
          {createEmptySlot()}
      </div>
  )
}

export default App;