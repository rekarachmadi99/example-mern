import { Button, Container, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const UserList = () => {
    const [users, setUser] = useState([]);

    useEffect(()=>{
        getUser();
    },[])

    const getUser = async () =>{
        const response = await axios.get("http://localhost:5000/users");
        setUser(response.data);
    }
    
    const deleteUser = async (id)=>{
        try {
            await axios.delete(`http://localhost:5000/users/${id}`);
            getUser();
        } catch (error) {
            console.log(error);
        }
    };
    return(
        <Container>
            <div className="mt-4">
                <Link to="add" className="btn btn-primary">Add New</Link>
                <Table className="mt-2" bordered striped hover>
                    <thead className="text-center">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index)=>(
                                <tr key={user._id}>
                                    <td>{index+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td className="d-flex justify-content-center align-item-center">
                                        <Link to={`edit/${user._id}`} className="btn btn-info">Edit</Link>                
                                        <Button onClick={() => deleteUser(user._id)} variant="danger" className="btn-sm">Delete</Button>
                                    </td>
                                </tr>       
                            ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}

export default UserList;