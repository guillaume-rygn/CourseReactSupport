import { legacy_createStore as createStore } from 'redux';

const initialState = {
  name: '',
  id: ''
}

const login = (state = initialState, action) => {

  if(action.type === 'LOGIN'){
    return{
      ...state,
      name: action.name,
      id: action.id
    }
  }

  return state;
} 

const store = createStore(login);

export default store;