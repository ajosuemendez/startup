import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "./Header";

export default function Home() {

    //Default user Data
    const userData = {
        budget : 0,
        department : "",
    }

    //Hooks
    const [form, setForm] = React.useState(userData);

    const navigate = useNavigate();

    const {register, handleSubmit} = useForm();


    //Event Functions
    function onChangeHandler(event) {
        const {name, value} = event.target;

        setForm( prev => {
            return {
                ...prev,
                [name] : name === "budget" ? +value : value,
            }
        })
    }

    function submitHandler() {
        //Request
        console.log(form);
        //Redirect
        navigate("/recommendations");
    }

    return(
        <div>
            <Header/>
            <h1>HOME PAGE</h1>
            <br/>
            <form onSubmit={handleSubmit(submitHandler)}>
                <label htmlFor="departments">Departments</label>
                <select id="department" {...register("department", {required: true})} onChange={onChangeHandler} value={form.department}>
                    <option value="">--Choose--</option>
                    <option value="IT">IT</option>
                    <option value="Finance">Finance</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                </select>
                <br/>
                <br/>
                <label htmlFor="budget--input">Budget</label>
                <input 
                    className="form--bugdet" 
                    type="number" 
                    id="budget--input" 
                    {...register("budget", {required : true})}
                    placeholder="Ex: 10000"
                    min="0"
                    max="100000000"
                    onChange={onChangeHandler}/>
                <br/>
                <br/>
                <button className="generic--button">Check the Result</button>
            </form>
        </div>
    );
}