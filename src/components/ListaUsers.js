
import React, { useState, useEffect } from 'react';
import Api from '../service/api'


function ListaCards (props) {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        Api.get("http://localhost:3001/api/usuarios")
            .then((response) => setUsers(response.data))
            .catch((err) => console.log(err))    
    },[users])

    return (
        <section className='d-flex flex-row flex-wrap justify-content-center'>
        <table>
            <thead>
            <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>Cidade</th>
                <th>Estado</th>
            </tr>
            </thead>
            <tbody>
            { users.map ( user => 
            <tr key={user.id} id={user.id}>
                <td>{user.nome}</td>
                <td>{user.telefone}</td>
                <td>{user.email}</td>
                <td>{user.cidade}</td>
                <td>{user.estado}</td>
            </tr>)}
            </tbody>
        </table>
        </section>    
    )
}

export default ListaCards;