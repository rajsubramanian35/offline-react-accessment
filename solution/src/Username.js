import { isNameValid } from "./mock-api/apis";
import { useState, useRef } from "react"

export default function Username({userNameOnChange, name}) {
  const usernameRef = useRef(null)
  const [username, setUsername] = useState(name)
  const [isUsernameValid, setIsUsernameValid] = useState(null)
  
  function handleUsernameChange(e) {
    function validationCallback(boundUsername, isBoundUsernameValid) {
      if (boundUsername === usernameRef.current.value) {
        setIsUsernameValid(isBoundUsernameValid)
      }
      userNameOnChange({
        value: usernameRef.current.value,
        isValid: isBoundUsernameValid
      })
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
        <input onChange={handleUsernameChange} value={username} placeholder="Choose your username" autoComplete="off" id="username" name="username" type="text" ref={usernameRef} />
        <div className="usernameMsg">
          {username && isUsernameValid === true && (<div className="usernameAvailable">✓ {username} is available!!! </div>)}
          {username && isUsernameValid === false && (<div className="usernameNotAvailable">✖ {username} has already been taken </div>)}
        </div>
      </div>
    </>
  )
}
