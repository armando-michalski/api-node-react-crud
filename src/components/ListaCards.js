
import React, { useState, useEffect } from 'react';
import Api from '../service/api'
import Card from './Card'

function ListaCards (props) {
    const [livros, setLivros] = useState([]);
    
    useEffect(() => {
        Api.get("")
            .then((response) => setLivros(response.data))
            .catch((err) => console.log(err))    
    },[livros])

    return (
        <section className='d-flex flex-row flex-wrap justify-content-center'>
            { livros.map ( livro => 
            <Card key={livro.id} id={livro.id} nome={livro.livro_nome} 
                autor= {livro.livro_autor} 
                ano={livro.livro_ano}>
            </Card> )}
        </section>    
    )
}

export default ListaCards;