import { createStore } from "redux";

const initialState = {
    leads: null,
    loadingLeads: false,

    lead:null,
    loadingLead:false
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
            default:
                return {
                    ...state
                }
    } 

}