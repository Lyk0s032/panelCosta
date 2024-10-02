import React, { useEffect } from 'react';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import * as actions from './store/action/action';
export default function QRDiv(){
    const ferias = useSelector(store => store.ferias);
    const loading = useSelector(store => store.loadingFerias);

    const [params, setParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.axiosGetFerias());
    }, [])
    return (
        loading || !ferias ?
        <div>
            <h1>Cargando...</h1>
            {
                console.log(loading)
            }{
                console.log(ferias)

            }
        </div>
        :
        <div className="c">
            {
                ferias && ferias.length ? 
                    ferias.map((res, i) => {
                            return (
                                <div className="item" key={i+1} onClick={() => {
                                    params.delete('watch');
                                    params.set('qr', res.id);
                                    setParams(params);
                                }}> 
                                    <div className="iconCont">
                                        <MdOutlineAlternateEmail className="icon" />
                                    </div>
                                    <div className='desc'>
                                        <h3>{res.name} {res.lastName}</h3>
                                        <span>{res.nameBusiness}</span><br />
                                        <strong>{res.createdAt.split('T')[0]}</strong>
                                    </div>
                                
                                </div>
                            )
                        
                    })
                :
                <h1>
                    No hay registro aun
                </h1>
            }
        </div>
    )
}