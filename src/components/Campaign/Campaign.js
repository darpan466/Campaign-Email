import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Campaign = () => {
    const initData = {name: "", subject: "", email: "", from: "", reply: "", file: ""};
    //
    const [data, setData] = useState(initData);
    //
    const clear = () => setData(initData);
    //
    const onSubmit = async (e) => {
        e.preventDefault();

    };
    //
    return (
        <form>
            <label>Name </label><input placeholder="name" value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/><br/>
            <label>Subject </label><input placeholder="subject" value={data.subject} onChange={(e) => setData({...data, subject: e.target.value})}/><br/>
            <label>Email </label><input placeholder="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/><br/>
            <label>From </label><input placeholder="from" value={data.from} onChange={(e) => setData({...data, from: e.target.value})}/><br/>
            <label>Reply </label><input placeholder="reply" value={data.repy} onChange={(e) => setData({...data, reply: e.target.value})}/><br/>
            <button onClick = {e => onSubmit(e)}> Save </button><br/>
        </form>
    );
    //
};

export default Campaign;
 