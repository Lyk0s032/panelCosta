import axios from "axios";

import { useActionData } from "react-router-dom";

export function toGetCalls(carga){
    return {
        type: 'GETTING_LEADS',
        payload: carga
    }
}
export function gettingLeads(carga){
    return {
        type: 'GETTING_LEADS',
        payload: carga
    }
}
export function getLeads(leads){
    return {
        type: 'GET_LEADS',
        payload: leads
    }
}
export function axiosGetProjects(carga){
    return function(dispatch){
        dispatch(gettingLeads(carga));
        axios.get('/call/get')
        .then((info) => info.data)
        .then(info => {
            return dispatch(getLeads(info))
        })
        .catch(e => {
            console.log('error');
            if(e.response.status == 404){
                return dispatch(getLeads(404))
            }else{
                return dispatch(getLeads('request'))
            }
        })
    }
}

// LEAD
export function gettingLead(carga){
    return {
        type: 'GETTING_LEAD',
        payload: carga
    }
}
export function getLead(lead){
    return {
        type: 'GET_LEAD',
        payload: lead
    }
}
export function axiosGetLead(carga,id){
    return function(dispatch){
        dispatch(gettingLead(carga));
        axios.get('/call/get/'+id)
        .then((info) => info.data)
        .then(info => {
            console.log(info)
            dispatch(gettingLead(false));

            return dispatch(getLead(info))
        })
        .catch(e => {
            dispatch(gettingLead(false));

            console.log('error');
            if(e.response.status == 404){
                return dispatch(getLead(404))
            }else{
                return dispatch(getLead('request'))
            }
        })
    }
}

export function closeLead(){
    return {
        type: 'CLOSE_LEAD',
        payload: null
    }
}


// FERIAS
export function gettingFerias(carga){
    return {
        type: 'GETTING_FERIAS',
        payload: carga
    }
}
export function getFerias(leads){
    return {
        type: 'GET_FERIAS',
        payload: leads
    }
}
export function axiosGetFerias(){
    return function(dispatch){
        dispatch(gettingFerias());
        axios.get('/qr/get')
        .then((info) => info.data)
        .then(info => {
            return dispatch(getFerias(info))
        })
        .catch(e => {
            console.log('error');
            if(e.response.status == 404){
                return dispatch(getFerias(404))
            }else{
                return dispatch(getFerias('request'))
            }
        })
    }
}


// FERIA
export function gettingFeria(carga){
    return {
        type: 'GETTING_FERIA',
        payload: carga
    }
}
export function getFeria(lead){
    return {
        type: 'GET_FERIA',
        payload: lead
    }
}
export function axiosGetFeria(carga,id){
    return function(dispatch){
        dispatch(gettingFeria(carga));
        axios.get('/qr/get/'+id)
        .then((info) => info.data)
        .then(info => {
            console.log(info)
            dispatch(gettingFeria(false));

            return dispatch(getFeria(info))
        })
        .catch(e => {
            dispatch(gettingFeria(false));

            console.log('error');
            if(e.response.status == 404){
                return dispatch(getFeria(404))
            }else{
                return dispatch(getFeria('request'))
            }
        })
    }
}
export function closeFeria(){
    return {
        type: 'CLOSE_FERIA',
        payload: null
    }
}