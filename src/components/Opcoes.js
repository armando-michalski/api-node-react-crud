
import React, { useState } from 'react';
import Api from '../service/api'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
   

function ListaCards (props) {
    const [show, setShow] = useState(false);
    const [nome, setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [ano, setAno] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const adicionar = () => {
        Api.post(`http://localhost:3001/api/livros/`, {nome,autor,ano})
        .then((response) => console.log(response))
        .catch((err) => console.log(err))    
        handleClose() 
    }

    return (
             <header className="ps-3 pt-3">
                <Button variant="primary" onClick={handleShow}>
                    Cadastrar Livro
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Cadastrar Livro</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="d-flex flex-column">
                            <label>Nome do Livro</label>
                            <input value={nome} onChange={(e)=>setNome(e.target.value)} type='text'></input>
                        </div>

                        <div className="d-flex pt-5 flex-column">
                            <label>Nome do Autor</label>
                            <input value={autor} onChange={(e)=>setAutor(e.target.value)} type='text'></input>
                        </div>

                        <div className="d-flex pt-5 pb-3 flex-column">
                            <label>Ano de Lançamento</label>
                            <input value={ano} onChange={(e)=>setAno(e.target.value)} type='text'></input>
                        </div>
                    
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                        </Button>
                        <Button variant="primary" onClick={() => adicionar()}>
                            Cadastrar
                        </Button>
                    </Modal.Footer>
                </Modal>

             </header>
    )
}

export default ListaCards;