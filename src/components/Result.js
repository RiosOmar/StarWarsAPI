import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Result = (props) => {
    const [info, setInfo] = useState({})
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${props.categoryTerm}/${props.id}/`)
        .then(response=> {
            console.log("*********")
            console.log(response)
            console.log("********")
            setInfo(response.data)
        })
        .catch(err => {
            console.log (err)
        })
    }, [props.categoryTerm, props.id] )
    
    return (
        <div>
            <h1> this is your results from {props.categoryTerm} and {props.id}</h1>

          <p>  Name: {info.name} </p>
           <p>  Hair Color: {info.hair_color} </p>
        </div>
    );
};

Result.propTypes = {};

export default Result;