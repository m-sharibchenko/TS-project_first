import React, { useEffect, useState } from 'react'
import './style.css'

interface Props {
  name: string;
  isActive: boolean;
  btnIsClicked: (bool: boolean, name: string) => void;
}

export const Button: React.FC<Props> = (props) => {
  const [status, setStatus] = useState(props.isActive)

  useEffect(() => {
    const { btnIsClicked } = props

    btnIsClicked(status, props.name)
  }, )

  const onBtnClick = () => {
    setStatus(prevState => !prevState)
  }

  return (
    <button className="button"
            onClick={onBtnClick}
    >
      {props.name}
    </button>
  )
}
