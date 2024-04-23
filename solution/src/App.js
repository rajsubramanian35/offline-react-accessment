import './App.css';
import UserLocation from './UserLocation';
import Username from './Username';

function App() {
  return (
    <div className="formGridContainer">
      <form className="formGrid">
        <Username />
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
