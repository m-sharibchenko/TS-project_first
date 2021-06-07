import React from 'react'
import './style.css'
import { Button } from "../Button";
import { manageBtns } from "../constants";

interface Props {
  btnFunction: (bool: boolean, name: string) => void

}

export const ManageBtnsWrapper: React.FC<Props> = (props) => {
  const btnIsClicked = (bool: boolean, name: string) : void => {
    const { btnFunction } = props
    btnFunction(bool, name)
  }

  return (
    <div className="manage-btns-wrapper">
      {manageBtns.map(({id, isActive}) => {
        return <Button
          key={id}
          name={id}
          isActive={isActive}
          btnIsClicked={btnIsClicked}
        />
      })}
    </div>
  )
}
