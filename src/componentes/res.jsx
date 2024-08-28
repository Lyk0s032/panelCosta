import React, { useEffect } from 'react';
import * as actions from './store/action/action';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

export default function Res(){
    const dispatch = useDispatch();
    const lead = useSelector(store => store.lead);
    const loading = useSelector(store => store.loadingLead);
    const [params, setParams] = useSearchParams();
    useEffect(() => {
        dispatch(actions.axiosGetLead(true, params.get('watch')));
    }, [params.get('watch')])
    return (
        <div className='res'>
            <div className='resContainer'>
                {
                    !lead || loading ? <h1>Cargando...</h1> :
                    <div className='boxCurrently'>
                            <div className='top'>
                                <h3>{lead.createdAt.split('T')[0]}</h3>
                            </div>
                            <div className='info'>
                                <div className='containerInfoCall'>
                                    <div className='by'>
                                        <strong>Fuente: </strong> <span>{lead.from}</span>
                                    </div><br />
                                    <div className='user'>
                                        <strong>Nombre: </strong> <span>{lead.name}</span><br /><br />
                                        <strong>Contacto: </strong> <span>{lead.number}</span><br /><br /><br />
                                        {/* <strong>Estado: </strong> <span>{lead.number}</span> */}
                                    
                                    </div>
                                </div>
                            </div>
                            
                </div> 
                }
            </div>
        </div>
    )
}