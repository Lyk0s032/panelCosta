import React, { useState } from 'react';
import { MdOutlineAlternateEmail } from 'react-icons/md';

export default function Panel(){
    const info = [{
        by: "https://modularescosta.co",
        name: "Kevin Bolaños",
        phone: "3212207563",
        state: "Nuevo"
    },
    {
        by: "https://modularescosta.co",
        name: "Felipe",
        phone: "3158889921",
        state: "abierto"
    },{
        by: "https://metalicascosta.com.co",
        name: "Andrés Orrego",
        phone: "4371651",
        state: "Nuevo"
    },
    {
        by: "https://modularescosta.co",
        name: "Giselle Duran",
        phone: "3174531905",
        state: "eliminado"
    },{
        by: "https://modularescosta.co",
        name: "Elizabeth Ulloa",
        phone: "3009815120",
        state: "nuevo"
    },
    {
        by: "https://metalicascosta.com.co",
        name: "Andres Gomez",
        phone: "3175519121",
        state: "span"
    },
    {
        by: "https://modularescosta.co",
        name: "Kevin Bolaños",
        phone: "3212207563",
        state: "Nuevo"
    },
    {
        by: "https://modularescosta.co",
        name: "Jorge Costa",
        phone: "3106219130",
        state: "Nuevo"
    },
    {
        by: "https://metalicascosta.com.co",
        name: "Mauricio M",
        phone: "45133321",
        state: "Nuevo"
    },
    {
        by: "https://modularescosta.co",
        name: "Nicole S",
        phone: "3025212121",
        state: "Nuevo"
    },
    {
        by: "https://modularescosta.co",
        name: "Elena",
        phone: "3212207563",
        state: "Nuevo"
    }]

    const [currently, setCurrently] = useState(null);

    const [type, setType] = useState('welcomen');
    return (
        <div className='panel'>
            <div className="containerPanel">
                <div className='left'>
                    <div className='call'>
                        <div className='containerCall'>
                            <div className='leftNav'>
                                <nav>
                                    <ul>
                                        <li className={type == 'welcomen' ? 'Active' : null} onClick={() => setType('welcomen')}>
                                            <span>
                                                Bandeja de entrada
                                            </span>
                                        </li>
                                        <li className={type == 'opened' ? 'Active' : null} onClick={() => setType('opened')}>
                                            <span>
                                                Abiertos
                                            </span>
                                        </li>
                                        <li className={type == 'deleted' ? 'Active' : null} onClick={() => setType('deleted')}>
                                            <span>
                                                Eliminados
                                            </span>
                                        </li>


                                    </ul>
                                </nav>
                            </div>
                            <div className="list">
                                <div className='title'>
                                    <h1>Bandeja principal</h1>
                                </div>
                                <div className='container'>
                                    <div className="c">
                                        {
                                            info.map((res, i) => {
                                                console.log(i)
                                                if(type == 'welcomen'){
                                                    return (
                                                        <div className="item" key={i+1} onClick={() => setCurrently(res)}>
                                                            <div className="iconCont">
                                                                <MdOutlineAlternateEmail className="icon" />
                                                            </div>
                                                            <div className='desc'>
                                                                <h3>{res.name}</h3>
                                                                <span>{res.by}</span><br />
                                                                <strong>20 de Agosto del 2024 - 7:30 AM</strong>
                                                            </div>
                                                            <div className="state">
                                                                <span>¡Nuevo!</span>
                                                            </div>
                                                        </div>
                                                    )
                                                }else if(type == 'deleted'){
                                                    if(res.state == 'eliminado'){
                                                        return (
                                                        
                                                            <div className="item" key={i+1} onClick={() => setCurrently(res)}>
                                                                <div className="iconCont">
                                                                    <MdOutlineAlternateEmail className="icon" />
                                                                </div>
                                                                <div className='desc'>
                                                                    <h3>{res.name}</h3>
                                                                    <span>{res.by}</span><br />
                                                                    <strong>20 de Agosto del 2024 - 7:30 AM</strong>
                                                                </div>
                                                                <div className="state">
                                                                    <span>Eliminado</span>
                                                                </div>
                                                            </div>
                                                        )  
                                                    }
                                                    
                                                }else if(type == 'opened'){
                                                    if(res.state == 'abierto'){
                                                        return (
                                                        
                                                            <div className="item" key={i+1} onClick={() => setCurrently(res)}>
                                                                <div className="iconCont">
                                                                    <MdOutlineAlternateEmail className="icon" />
                                                                </div>
                                                                <div className='desc'>
                                                                    <h3>{res.name}</h3>
                                                                    <span>{res.by}</span><br />
                                                                    <strong>20 de Agosto del 2024 - 7:30 AM</strong>
                                                                </div>
                                                                <div className="state">
                                                                    <span>Abierto</span>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                }
                                            })
                                        }
                                        
                                    

                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='stateBox'>
                    {
                        !currently ?
                            <div className='boxCurrentlyNone'>
                                <div className='containerNone'>
                                    <h1>Haz clic en un registro para visualizar</h1>
                                </div>
                            </div>
                        :
                        <div className='boxCurrently'>
                            <div className='top'>
                                <h3>10 de Agosto del 2024 - 4:30 PM</h3>
                            </div>
                            <div className='info'>
                                <div className='containerInfoCall'>
                                    <div className='by'>
                                        <strong>Fuente: </strong> <span>{currently.by}</span>
                                    </div><br />
                                    <div className='user'>
                                        <strong>Nombre: </strong> <span>{currently.name}</span><br /><br />
                                        <strong>Contacto: </strong> <span>{currently.phone}</span><br /><br /><br />
                                        <strong>Estado: </strong> <span>{currently.state}</span>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className='bottom'>
                                <nav>
                                    <ul>
                                        <li className='delete' onClick={() => {
                                            setCurrently(null)
                                        }}>
                                            <span>Eliminar</span>
                                        </li>
                                        
                                        <li className='span' onClick={() => {
                                            setCurrently(null)
                                        }}>
                                            <span>Marcar como spam</span>
                                        </li>
                                        <li className='green' onClick={() => {
                                            setCurrently(null)
                                        }}>
                                            <span>Confirmar</span>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div> 
                    }
                </div>
            </div>
        </div>
    )
}