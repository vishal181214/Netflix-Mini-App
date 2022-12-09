export const search =(load)=>{
    return {
        type:"search",
        payload: load
    }
}

export const moviesFilter = (movies, searchTerm) => {
    movies = movies.filter(item => {
        let name = item.name.toLowerCase();
        if (name.includes(searchTerm)) {
            return item
        }
    })
    console.log('15: ', movies)
    return {
        type: "update",
        payload: movies
    };
}