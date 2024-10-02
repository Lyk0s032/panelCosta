import React, { useEffect, useState } from 'react';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './store/action/action';
import Res from './res';
import { useSearchParams } from 'react-router-dom';
import QR from './qr';
import QRDiv from './qr';
import QrRes from './qrres';

export default function Panel(){
    const dispatch = useDispatch();
    const leads = useSelector(store => store.leads);

    const lead = useSelector(store => store.lead);

    const [params, setParams] = useSearchParams();


    useEffect(() => {
        dispatch(actions.axiosGetProjects())
    }, [])

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
                                        <li className={type == 'qr' ? 'Active' : null } onClick={() => setType('qr')}>
                                            <span>
                                                QR - Feria
                                            </span>
                                        </li>
                                        {/* <li className={type == 'opened' ? 'Active' : null} onClick={() => setType('opened')}>
                                            <span>
                                                Abiertos
                                            </span>
                                        </li>
                                        <li className={type == 'deleted' ? 'Active' : null} onClick={() => setType('deleted')}>
                                            <span>
                                                Eliminados
                                            </span>
                                        </li> */}


                                    </ul>
                                </nav>
                            </div>
                            <div className="list">
                                <div className='title'>
                                    <h1>{type == 'welcomen' ? 'Bandeja principal' : type == 'qr' ? 'QR - Fería' : null}</h1>
                                </div>
                                <div className='container'>
                                    {
                                        type == 'qr' ?
                                            <QRDiv />
                                        :
                                        <div className="c">
                                            {
                                                leads && leads.length ? 
                                                    leads.map((res, i) => {
                                                        if(type == 'welcomen'){
                                                            return (
                                                                <div className="item" key={i+1} onClick={() => {
                                                                    params.delete('qr');
                                                                    params.set('watch', res.id);
                                                                    setParams(params);
                                                                    setCurrently(res)
                                                                }}> 
                                                                    <div className="iconCont">
                                                                        <MdOutlineAlternateEmail className="icon" />
                                                                    </div>
                                                                    <div className='desc'>
                                                                        <h3>{res.name}</h3>
                                                                        <span>{res.from}</span><br />
                                                                        <strong>{res.createdAt.split('T')[0]}</strong>
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
                                                                            <span>{res.from}</span><br />
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
                                                :
                                                <h1>
                                                    No hay registro aun
                                                </h1>
                                            }
                                            
                                        

                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='stateBox'>
                    {
                        params.get('watch') ?
                        <Res />
                        : params.get('qr') ?
                        <QrRes />
                        :
                        !params.get('watch') || !params.get('qr') ?
                            <div className='boxCurrentlyNone'>
                                <div className='containerNone'>
                                    <h1>Haz clic en un registro para visualizar</h1>
                                </div>
                            </div>
                        
                        :null
                    }
                </div>
            </div>
        </div>
    )
}