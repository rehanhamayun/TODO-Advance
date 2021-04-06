import { GET_TODO_LIST } from "./types";

export const initialState = {
    loading: false,
    todos: [],
    error : null,
};
export const reducer = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {

        case GET_TODO_LIST :
            return{
                ...state,
                
                loading : true,
                todos : payload
            }
            case 'EDIT_TODOLIST' : 
            return{
                loading : true,
                
            }
        case 'CREATE_TODO_TASK' : 
        return{
            ...state,
            todos : [...state.todos , action.payload]
        }
        case 'DELETE_TODO_TASK' : 
        return{
            ...state,
            todos : [...state.todos.filter((fi) => fi.id !== action.payload)]
        }

        case 'EDIT_TODO_TASK' : 
       let updatedIdex = state.todos.findIndex((d) => d.id == payload.id)
       state.todos[updatedIdex].text = payload.text
        return {
            ...state
        }
        default:
            return state;
    }
};
