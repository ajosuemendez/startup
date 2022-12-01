import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "./Header";
import axios from 'axios';

export default function Home() {

    //Default user Data
    const userData = {
        budget : 0,
        department : "",
    }

    //Hooks
    const [form, setForm] = React.useState(userData);

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    
//   let [responseData, setResponseData] = React.useState([]);
//   const fetchData = React.useCallback(() => {
//     axios({
//       "method": "GET",
//       "url": "https://cleist.herokuapp.com/department",
//     })
//     .then((response) => {
//         setResponseData(response.data.map((department) => department.name))
//     })
//     .catch((error) => {
//       console.log(error)
//     })
//   }, [])
//     React.useEffect(() => {
//         fetchData()
//     }, [fetchData])
    
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

    async function submitHandler() {
        //Request
        console.log(form);
        var config = {
            method: 'post',
            url: 'https://cleist.herokuapp.com/recommendations',
            headers: { },
            data : form
        };
        const response = await axios(config);
        if (response.data.message === "SUCCESS") {
            navigate("/recommendations", { state: { devices: response.data.devices } });
        }
        else if (response.data.message === "INVALID_BUDGET") {
            alert("Invalid budget please increase your budget")
        }
        else {
            throw Error("Invalid request")
        }
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