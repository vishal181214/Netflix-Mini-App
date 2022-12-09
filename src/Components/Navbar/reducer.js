import Movies from "../../Pages/Home/data.json";
const initial={
    movies: Movies,
    currentMovies: Movies
}

const nav_reducer=(state=initial, action)=>{
    console.log('8: ', action);
    switch (action.type) {
        case "search":
            return {...state}
        case "init":
            return {...state, movies: action.payload}
        case "update": {
            return {...state, currentMovies: action.payload}
        }
        default:
            return state;
    }
}
export default nav_reducer;