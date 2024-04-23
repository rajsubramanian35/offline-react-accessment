import './App.css';
import UserLocation from './UserLocation';

function App() {
  return (
    <div className="formGridContainer">
      <form className="formGrid">
        <label htmlFor="username" >Name</label>
        <input id="username" name="username" type="text" placeholder="choose your username" />
        <label htmlFor="user-location">Location</label>
        <UserLocation />
        <div className="buttonsContainer">
          <button className="secondaryBtn marginRightXL">Clear Table</button>
          <button className="primaryBtn">Add to Table</button>
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
          <tr>
            <td colSpan="2" className="emptyTableMsg">
              Trying adding usernames to this table
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
