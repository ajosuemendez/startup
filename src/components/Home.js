import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "./Header";
import axios from 'axios';
import Footer from "./Footer";
import { ToggleButtonGroupControlled } from "./ToggleButton";
import { CleistSwitch, Toggle } from "./CleistSwitch";

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
        <div className="home--wrapper0">
            <Header/>
            <div className="home--wrapper">
                <div>
                    <h1>Tell us what you need and we do the rest for you!</h1>
                </div>
            <br/>
            <form style={{
                display: 'flex', 
                justifyContent: 'center', 
                flexDirection: 'column', 
                alignItems: 'center'}} 
                onSubmit={handleSubmit(submitHandler)}>
                <div style={{display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <div className="home--item">
                            <label htmlFor="departments">Department</label>
                        </div>
                        <div className="home--item">
                            <label htmlFor="budget--input">Budget</label>
                        </div>
                        
                        <div className="home--item">
                            <label htmlFor="os" >Preferred Operating System</label>
                        </div>
                        
                        <div className="home--item">
                            <label htmlFor="remote" >Working Remotely</label>
                        </div>
                        <div className="home--item">
                            <label htmlFor="software" >Software</label>
                        </div>
                    </div>
                    <div>
                        <div className="home--item--value">
                            <ToggleButtonGroupControlled id="department" singleSelect={true} label={["IT", "Finance"]} onChange={(res) => onChangeHandler(res[0])}/>
                        </div>
                        <div className="home--item--value">
                            <input 
                            style={{borderRadius: 10, paddingLeft: '12px',paddingTop: '8px', paddingBottom: '4px', color: 'white', backgroundColor: '#233A44', borderWidth: 0}}
                            className="form--budget" 
                            type="number" 
                            id="budget--input" 
                            {...register("budget", {required : true})}
                            placeholder="Ex: 10000"
                            min="0"
                            max="100000000"
                            onChange={onChangeHandler}/>
                        </div>
                        <div className="home--item--value">
                            <ToggleButtonGroupControlled singleSelect={true} label={["MacOS", "Windows"]} />
                        </div>
                        <div className="home--item--value">
                            <CleistSwitch />
                        </div>
                        <div className="home--item--value">
                            <ToggleButtonGroupControlled label={["AdobeXD", "Figma", "Illustrator", "Zeplin"]} />
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                    <button className="generic--button">Check the Result</button>
            </form>
            </div>
            <Footer />
        </div>
    );
}