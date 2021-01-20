import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
    const initData = {title: "", content: ""};
    //
    const [data, setData] = useState(initData);
    const [status, setStatus] = useState({curr: ""});
    //
    const clear = () => setData(initData);
    //
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(data); 
        const response = {error: 1}; // call api
        if(response.error) {
            setStatus({curr: "Couldn't save, try again"});
        } else {
            setStatus({curr: "Template saved!"});
            clear();
        }
    };
    //
    return (
        <form>
            <label>Title </label><input placeholder="Title" value={data.title} onChange={(e) => setData({...data, title: e.target.value})}/><br/>
            <label>Content </label><input placeholder="Content" value={data.content} onChange={(e) => setData({...data, content: e.target.value})}/><br/>
            <div>{status.curr}</div> 
            <button onClick = {e => onSubmit(e)}> Save </button><br/>
            <Link to="/"><button>Go Back</button></Link><br/>
        </form>
    );
    //
};

export default Form;
 