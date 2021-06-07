export function getNewTime (obj: {minutes: string, seconds: string} | string) : {minutes: string, seconds: string} | string {
  if (typeof obj !== 'string') {
    let seconds = +obj.seconds - 1
    let minutes = +obj.minutes

    if (seconds < 0) {
      seconds = 59
      minutes -= 1
    }

    if (minutes < 0) {
      return 'Time is up!'
    }

    return {
      minutes: minutes < 10 ? `0${minutes.toString()}` : `${minutes.toString()}`,
      seconds: seconds < 10 ? `0${seconds.toString()}` : `${seconds.toString()}`
    }
  }

  return 'done'
}