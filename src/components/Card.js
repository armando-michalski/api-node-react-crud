import Api from '../service/api'
import './card.css'


function Card (props) {   

    const deletar = (id) => {
        Api.delete(`http://localhost:3001/api/livros/${id}`)    
    }

    return(    
                <div className="p-3">
                    <div className="card">
                        <span onClick={() => deletar(props.id)} className="bg-danger text-white rounded-top pointer">X</span>
                        <div className="pt-4">
                            <small>ID: <span>{props.id}</span></small>
                            <p>{props.nome}</p>
                            <small>Autor: <span>{props.autor}</span></small><br></br>
                            <small>Data: <span>{props.ano}</span></small>
                        </div>
                    </div>
                </div>
            
            )
    }

    export default Card;