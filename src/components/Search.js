import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const Search = () => {
    const[starwarsData, setStarwarsData] = useState({})
    const [drowdownKeys, setdropdownKeys] =useState ([])
    const [formInfo, setformInfo] =useState( {
        term:"people",
        idInput: ""
    })

    const changeHandler = (e)=> {
        console.log("Filling out form")
        setformInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=> {
        e.preventDefault()
        navigate(`/${formInfo.term}/${formInfo.idInput}`)
    }
    useEffect(() => {
        axios.get("https://swapi.dev/api/")
        .then(response=> {
            console.log("*********")
            console.log(response)
            console.log("********")
            setStarwarsData(response.data)
            setdropdownKeys(Object.keys(response.data))
        })
        .catch(err => {
            console.log ("ERRORRRRRRR" , err)
        })
    }, [] )
    return (
        <div>
            <form onSubmit={submitHandler}>
            <p> Search for: <select  onChange={changeHandler} name="term" id="">
                {drowdownKeys.map((item, i)=>{
                return <option key = {i} value = {item}> {item} </option>
})}
                </select> </p>    
                <p> Id: <input type="number" onChange={changeHandler} name ="idInput" id=""/></p>
                <input type="submit" value="Search"/>
            </form>           
        </div>
    );
};

Search.propTypes = {};

export default Search;