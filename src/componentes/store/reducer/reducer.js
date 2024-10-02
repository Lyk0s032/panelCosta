import { createStore } from "redux";

const initialState = {
    leads: null,
    loadingLeads: false,

    lead:null,
    loadingLead:false,
    
    loadingFerias: false,
    ferias: null,

    loadingFeria: false,
    feria: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'GETTING_LEADS':
            return {
                ...state,
                loadingLeads: action.payload
            }
        case 'GET_LEADS':
            return {
                ...state,
                leads: action.payload
            }
        // Especifico
        case 'GETTING_LEAD':
            return {
                ...state,
                loadingLead: action.payload
            }
        case 'GET_LEAD':
            return {
                ...state,
                lead: action.payload
            }

        case 'CLOSE_LEAD':
            return {
                ...state,
                lead: null
            }




        case 'GETTING_FERIAS':
            return {
                ...state,
                loadingFerias: true
            }
        case 'GET_FERIAS':
            return {
                ...state,
                ferias: action.payload,
                loadingFerias:false
            }
        case 'GETTING_FERIA':
            return {
                ...state,
                loadingFeria: action.payload
            }
        case 'GET_FERIA':
            return {
                ...state,
                feria: action.payload,
                loadingFeria:false
            }
        case 'CLOSE_FERIA':
            return {
                ...state,
                feria: null
            }
        
            default:
                return {
                    ...state
                }
    } 

}