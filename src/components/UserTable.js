import React from 'react';

function UserTable(props) {
  return (
    <div className="grid-container">
      <div className="column-24">
        <table>
          <th>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
          </th>
          <tr>
            <td>Matthew</td>
            <td>Latini</td>
            <td>email@email.com</td>
          </tr>
          <tr>
            <td>Matthew</td>
            <td>Latini</td>
            <td>email@email.com</td>
          </tr>
          <tr>
            <td>Matthew</td>
            <td>Latini</td>
            <td>email@email.com</td>
          </tr>
          <tr>
            <td>Matthew</td>
            <td>Latini</td>
            <td>email@email.com</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default UserTable;
