import {connect}from 'react-redux';
import {useState} from 'react';
import {getGifs} from './../actions';

const GifForm = (props) =>{
    const [searchTerm, setSearchTerm ] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        props.getGifs(searchTerm);
    }
    const handleChange = (e) =>{
        props.getGifs(e.target.value);
    }
    console.log(searchTerm);
    return(
        <form onSubmit={handleSubmit}>
        <input onChange={handleChange}/>
        <button>Search</button>
      </form>
    )
}

export default connect(null, {getGifs})(GifForm);

// <form>
//         <input/>
//         <button>Search</button>
//       </form>