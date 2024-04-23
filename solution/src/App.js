import './App.css';
import { useState } from "react"

import UserLocation from './UserLocation';
import Username from './Username';

function App() {
  const [usernames, setUsernames] = useState([])
  const [username, setUsername] = useState('')
  const [isUsernameValid, setIsUsernameValid] = useState(null)
  const [location, setLocation] = useState('Select a country')
  const [isLocationValid, setLocationValid] = useState(false)

  function userNameOnChange({value, isValid}) {
    console.log("userNameOnChange valid", isValid)
    setUsername(value)
    setIsUsernameValid(isValid)
  }
  function userLocationOnChange({value, isValid}) {
    console.log("userLocationOnChange valid", isValid)
    setLocation(value)
    setLocationValid(isValid)
  }

  function clearTable() {
    setUsernames([])
  }

  function addToTable() {
    if (isUsernameValid && isLocationValid) {
      setUsernames(
        [
          ...usernames,
          {username: username, location: location}
        ]
      )
    } 
  }

  return (
    <div className="formGridContainer">
      <form className="formGrid" onSubmit={(e)=> e.preventDefault()}>
        <Username userNameOnChange={userNameOnChange} name={username} />
        <UserLocation userLocationOnChange={userLocationOnChange} location={location} />
        <div className="buttonsContainer">
          <button className="secondaryBtn marginRightXL" onClick={clearTable}>Clear Table</button>
          <button className="primaryBtn" onClick={addToTable}>Add to Table</button>
        </div>
      </form>
      <table className="userTable" cellPadding="0" cellSpacing="0"><thead>
        <tr>
          <th scope="col">
            Name
          </th>
          <th scope="col">
            Location
          </th>
        </tr>
      </thead>
        <tbody>
          {
            (usernames.length <= 0) && (<tr>
              <td colSpan="2" className="emptyTableMsg">
                Trying adding usernames to this table
              </td>
            </tr>)
          }
          {
            usernames.length > 0 && (
              usernames.map(({username, location}) => {
                return (<tr>
                  <td>{username}</td>
                  <td>{location}</td>
                </tr>)
              })
            )
          }
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
