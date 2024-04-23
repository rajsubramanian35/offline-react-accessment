import './App.css';
import { useState } from "react"

import UserLocation from './UserLocation';
import Username from './Username';

function App() {
  //child component states. To be passed down to child components 
  const [usernames, setUsernames] = useState([])
  const [username, setUsername] = useState('')
  const [isUsernameValid, setIsUsernameValid] = useState(null)
  //"Select a country" option is added to location dropdown to
  //imporve user experience
  const [location, setLocation] = useState('Select a country')
  const [isLocationValid, setLocationValid] = useState(false)

  function userNameOnChange({value, isValid}) {
    setUsername(value)
    setIsUsernameValid(isValid)
  }
  function userLocationOnChange({value, isValid}) {
    setLocation(value)
    setLocationValid(isValid)
  }
  //handles clear button click action
  function clearTable() {
    setUsernames([])
  }
  //handles add button click action
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
          {/* Button label are different than the label given in mockup. Descriptive button labels improves user experience */}
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
                {/* Added a helpful message about next steps the user can take when the table is empty */}
                Trying adding usernames to this table
              </td>
            </tr>)
          }
          {
            usernames.length > 0 && (
              usernames.map(({username, location}, i) => {
                return (<tr key={i}>
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
