// import React, { useEffect, useState } from 'react'
import React from 'react'
import './App.css'
// import { Timer } from "./Timer"
import { PicturesWrapper } from "./PicturesWrapper"
// import { ManageBtnsWrapper } from "./ManageBtnsWrapper"

export const App: React.FC = () => {
  // const [gameState, setGameState] = useState(false)
  // const [clean, setClean] = useState(false)
  //
  // useEffect(() => {
  //   // setClean(false)
  // }, )
  //
  // const btnFunction = (bool: boolean, name: string) : void => {
  //   switch (true) {
  //     case name === 'start' && bool :
  //       console.log('start')
  //       setGameState(true)
  //       break
  //     case name === 'pause' && bool :
  //       console.log('pause')
  //
  //       setGameState(false)
  //       break
  //     case name === 'restart' && bool :
  //       console.log('restart')
  //
  //       setClean(true)
  //       break
  //   }
  // }

  return (
    <div className="App">
      {/*<Timer isStarted={gameState} isClean={clean}/>*/}

      <PicturesWrapper />

      {/*<ManageBtnsWrapper btnFunction={btnFunction} />*/}
    </div>
  )
}
