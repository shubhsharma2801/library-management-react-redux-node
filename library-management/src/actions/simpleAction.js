const ADD_BOOK ="ADD BOOK";
const SEARCH_BOOK ="SEARCH BOOK";
const EDIT_BOOK ="EDIT BOOK";
const DATA_LOADED ="DATA LOADED";
export const simpleAction = (data) => dispatch => {
    dispatch({
     type: ADD_BOOK,
     payload: data
    })
   }
export const searchAction = (data) => dispatch => {
    console.log(data);
    dispatch({
     type: SEARCH_BOOK,
     searchValue: data
    })
   }   
export const editAction = (data) => dispatch => {
    console.log(data);
    dispatch({
     type: EDIT_BOOK,
     editRecord: data
    })
} 
export const dataLoaded = (data) => dispatch => {
    console.log(data);
    dispatch({
     type: DATA_LOADED,
     records: data
    })
}   
