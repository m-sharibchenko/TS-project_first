import React, { MouseEvent } from 'react'
import uniqid from 'uniqid'
import './style.css'
import { Picture } from "../Picture";
import { pictures, questionImg } from "../constants";
import { createRandomArray } from "./utils/createRandomArray";

export const PicturesWrapper: React.FC = () => {
  const onPicturesClick = (evt : MouseEvent<HTMLDivElement>) => {
    const target = evt.target as Element
    console.log(target.parentElement?.getAttribute('data-id'))
  }

  return (
    <div className="pictures-wrapper" onClick={onPicturesClick}>
      {createRandomArray(pictures).map(({id, img}) => {
        return <Picture
          cardImg={img}
          questionImg={questionImg.img}
          id={id} key={uniqid()}
        />
      })}
    </div>
  )
}
