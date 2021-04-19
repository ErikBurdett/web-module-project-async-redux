import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const getGifs = (searchTearm) =>{
    return(dispatch=>{
        dispatch(fetchStart());
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=9GhvjQ38tp5JdHNGJHJgxJ78paQEyCwy&q=${searchTearm}`)
        .then(res=>{
            dispatch(fetchSuccess(res.data.data));

        })

    });
}

export const fetchStart = () =>{
    return({type: FETCH_START});
}

export const fetchSuccess = (gifs)=>{
    return({type: FETCH_SUCCESS, payload: gifs});
}
