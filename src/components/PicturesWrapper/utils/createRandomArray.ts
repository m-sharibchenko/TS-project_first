import { PictureObj } from './interfaces'

export function createRandomArray (array: PictureObj[]) : PictureObj[] {
  const newArray = [...array, ...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray
}