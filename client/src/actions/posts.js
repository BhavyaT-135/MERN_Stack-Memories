import * as api from '../api';

//Action Creators are functions that return an action
const getPosts = () => async (dispatch) => {
    const action = { type: 'FETCH_ALL', payload: [] };
    
    dispatch(action);
}