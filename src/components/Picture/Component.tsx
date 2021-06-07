import React, { useState } from 'react'
import './style.css'

interface Props {
  cardImg: string,
  id?: number,
  questionImg: string,
}

export const Picture: React.FC<Props> = (props) => {
  const [ isShowed, setIsShowed ] = useState(false)

  const onClickCard = () => {
    setIsShowed(!isShowed)
  }

  return (
    <div className="card-wrapper"
         data-id={props.id}
         onClick={onClickCard}
    >
      <img src={props.cardImg}
           alt="flowers"
           className={isShowed ? "show-card" : "hide-card"}
           width="200px" height="200px"
      />

      <img src={props.questionImg}
           alt="question"
           className={isShowed ? "hide-card" : "show-card"}
           width="200px" height="200px"
      />
    </div>
  )
}
