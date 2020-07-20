import React, { Component } from 'react';
import '../Css/User.css';

class User extends Component {


    render() {
        return <div className="container">
            <h2> User List</h2>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Tejashree vasudev surve</td>
                            <td>teju@gmail.com</td>
                            <td>teju123</td>

                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Tanvi vasudev surve</td>
                            <td>tanvi@gmail.com</td>
                            <td>tanvi</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    }
}

export default User;