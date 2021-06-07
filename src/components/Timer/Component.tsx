import React, { useEffect, useState } from 'react'
import './style.css'
import { getNewTime } from './utils/getNewTime'

interface Time {
  minutes: string;
  seconds: string;
}

interface Props {
  isStarted: boolean;
  isClean: boolean;
}

export const Timer: React.FC<Props> = (props) => {
  const [isStarted, setIsStarted] = useState(false)
  const [time, setTime] = useState<Time | string>({ minutes: '08', seconds: '00' })

  useEffect(() => {
    setIsStarted(props.isStarted)
    if (isStarted) {
      console.log('game is started')
     const id = setInterval(() => {setTime(prevState => getNewTime(prevState))}, 1000)
      if (props.isClean) {
        console.log('timer will be cleared')
        clearInterval(id)
        setIsStarted(false)
      }
    }

  }, )

  return (
    <div className="timer">
      {typeof time === "string" ? time : `${time.minutes} : ${time.seconds}`}
    </div>
  )
}
