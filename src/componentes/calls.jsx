import React from 'react';
import { MdOutlineAlternateEmail } from 'react-icons/md';

export default function Calls(props){
    const data = props.data;
    console.log(data)
    return (
        <div className='call'>
            <div className='containerCall'>
                <div className='leftNav'>
                    <nav>
                        <ul>
                            <li>
                                <span>
                                    Bandeja de entrada
                                </span>
                            </li>
                            <li>
                                <span>
                                    Abiertos
                                </span>
                            </li>
                            <li>
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
                                data.map((res, i) => {
                                    console.log(i)
                                    return (
                                        <div className="item" key={i+1}>
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
                                })
                            }
                            
                           

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}