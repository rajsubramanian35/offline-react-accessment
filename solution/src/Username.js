import { isNameValid } from "./mock-api/apis";
import { useState, useRef } from "react"

export default function Username() {
  const usernameRef = useRef(null)
  const [usernameInView, setUsername] = useState('')
  const [isUsernameValid, setIsUsernameValid] = useState(null)
  
  function handleUsernameChange(e) {
    function validationCallback(boundUsername, isBoundUsernameValid) {
      if (boundUsername === usernameRef.current.value) {
        setIsUsernameValid(isBoundUsernameValid)
      }
    }
    const val = e.target.value
    const boundValidationCallback = validationCallback.bind(this, val)

    setUsername(val)
    setIsUsernameValid(null)
    isNameValid(val).then(boundValidationCallback)
  }
  return (
    <>
      <label htmlFor="username" className='formlabel'>Name</label>
      <div className="flexContainer posRelative">
        <input onChange={handleUsernameChange} value={usernameInView} placeholder="Choose your username" autoComplete="off" id="username" name="username" type="text" ref={usernameRef} />
        <div className="usernameMsg">
          {usernameInView && isUsernameValid === true && (<div className="usernameAvailable">✓ {usernameInView} is available!!! </div>)}
          {usernameInView && isUsernameValid === false && (<div className="usernameNotAvailable">✖ {usernameInView} has already been taken </div>)}
        </div>
      </div>
    </>
  )
}
