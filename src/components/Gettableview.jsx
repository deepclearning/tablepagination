import React, {Component} from "react";
import users from "../data/users.js";

class Gettableview extends Component {
    constructor(props){
        super(props);
        this.state = {            
            users : users            
        };
    }

    onSort(event, sortKey) {
        const data = this.state.users;
        data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
        this.setState({data})
    }

    onSort1(event, sortKey) {
        const data = this.state.users;
        data.sort((a, b) => Number(a[sortKey]) - Number(b[sortKey]));
        this.setState({data});
    }

    render() {
        const {users} = this.state;

        return (
            <table>
                <thead>
                    <tr>
                    <th onClick={e=>this.onSort(e,"first_name")}>First Name</th>
                    <th onClick={e=>this.onSort(e,"last_name")}>Last Name</th>
                    <th onClick={e=>this.onSort(e,"company_name")}>Company Name</th>
                    <th onClick={e=>this.onSort(e,"city")}>City</th>
                    <th onClick={e=>this.onSort(e,"state")}>State</th>
                    <th onClick={e=>this.onSort1(e,"zip")}>Zip</th>
                    <th onClick={e=>this.onSort(e,"email")}>Email</th>
                    <th onClick={e=>this.onSort(e,"web")}>Web</th>
                    <th onClick={e=>this.onSort1(e,"id")}>Id</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map( user => <tr key={user.id}>
                        <td>{user.first_name} </td>
                        <td>{user.last_name} </td>
                        <td>{user.company_name} </td>
                        <td>{user.city} </td>
                        <td>{user.state} </td>
                        <td>{user.zip} </td>
                        <td>{user.email} </td>
                        <td>{user.web} </td>
                        <td>{user.id} </td>
                    </tr>)}
                </tbody>
            </table>
        
        );
    }
} 
export default Gettableview;
