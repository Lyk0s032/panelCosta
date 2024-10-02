import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import * as actions from './store/action/action';

export default function QrRes(){
    const [params, setParams] = useSearchParams();
    const feria = useSelector(store => store.feria);
    const loading = useSelector(store => store.loadingFeria);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.axiosGetFeria(true, params.get('qr')))
    }, [params.get('qr')])
    return (
        <div className='res'>
            <div className='resContainer'>
                {
                    !feria || loading ? <h1>Cargando...</h1> :
                    <div className='boxCurrently'>
                            <div className='top'>
                                <h3>{feria.createdAt.split('T')[0]} - FERIA</h3>
                            </div>
                            <div className='info'>
                                <div className='containerInfoCall'>
                                    <div className='by'>
                                        <strong>Fuente: </strong> <span>Feria</span>
                                    </div><br />
                                    <div className='user'>
                                        <strong>Nombre completo: </strong> <span>{feria.name} {feria.lastName}</span><br /><br />
                                        <strong>Contacto: </strong> <span>{feria.phone}</span><br /><br />
                                        <strong>Email: </strong> <span>{feria.email}</span><br /><br />
                                        <strong>Nombre empresa: </strong> <span>{feria.empresa}</span><br /><br /><br />


                                        {/* <strong>Estado: </strong> <span>{lead.number}</span> */}
                                    
                                        <button className='close' onClick={() => {
                                            params.delete('qr');
                                            setParams(params);
                                            dispatch(actions.closeFeria());
                                        }}>
                                            <span>Cerrar</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                </div> 
                }
            </div>
        </div>
    )
}