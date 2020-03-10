const ADD_BOOK ="ADD BOOK";
const SEARCH_BOOK ="SEARCH BOOK";
const EDIT_BOOK ="EDIT BOOK";
const DATA_LOADED ="DATA LOADED";
const initialState={
    books:[],
    search :[]
}
export default (state = initialState, action) => {
    switch (action.type) {
        //When book is added
        case ADD_BOOK:
            console.log(action.payload);
            console.log(state);
            action.payload.id = state.books.length+1;
            var stateAdd = {
                books:[...state.books,action.payload],
                search:[]
                }
            updateBackend(stateAdd.books);
        return stateAdd;
        //When book is searched
        case SEARCH_BOOK : 
            console.log(action.searchValue);
            console.log(state);
            var searchBooks = state.books.filter((item)=>{
                return item.name.startsWith(action.searchValue)
            });
            
            return {
                books : state.books,
                search : searchBooks
            }
        //When book is edited    
        case EDIT_BOOK:
        console.log(action); 
        var books = state.books.map((item,index)=>{
            return action.editRecord.id ===item.id ?action.editRecord : item;
        })  ;
        var stateEdit ={
            books:books,
            search:[]
        }   
        updateBackend(stateEdit.books);
        return stateEdit;
        //At App load we read book from library.json file stored in node server
        case DATA_LOADED:
            console.log(action.records);
            return {
                books:action.records,
                search:[]
            }
        default:
        return state;
    }
   }
//Whenever a state is changed we make sure that change is stored in backend library.json file
var updateBackend = function(params) {
    console.log(params);
    fetch("http://localhost:9000/libraryPost",{
        method:"post",
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(params)
    }).then(res => res.text())
      .then(
        (result) => {
          console.log("##########");
          console.log(result);
        },
        (error) => {
          console.log("##########");
          console.log(error);
          
        }
      )
}   
   