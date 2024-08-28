import axios from "axios";

import { useActionData } from "react-router-dom";

export function toGetCalls(carga){
    return {
        type: 'GxETTING_LEADS',
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