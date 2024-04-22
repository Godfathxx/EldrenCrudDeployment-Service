import { useEffect, useState } from "react";

function ServiceForm(props)
{
    const [Name,setName] = useState(props.NameValue);
    const [ID,setID] = useState(props.IDValue);
    const [Phone,setPhone] = useState(props.PhoneValue);
    const [EmailID,setEmailID] = useState(props.EmailIDValue);
    const [Service,setService] = useState(props.ServiceValue);

    useEffect(()=>{
        setName(props.NameValue);
        setID(props.IDValue);
        setPhone(props.PhoneValue);
        setEmailID(props.EmailIDValue);
        setService(props.ServiceValue);
    },[props.NameValue,props.IDValue,props.PhoneValue,props.EmailIDValue,props.ServiceValue]);
   
    const arr = [Name,ID,Phone,EmailID,Service];  //[Raj,raj@gmail.com,1]
   
    const handleClick = () =>{
        props.getState(arr);
    }

    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.NameValue} onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="Enter your Name" />
            <input defaultValue={props.IDValue} onChange={(event)=>setID(event.target.value)} class="form-control my-3" placeholder="Enter your ID" />
            <input defaultValue={props.PhoneValue} onChange={(event)=>setPhone(event.target.value)} class="form-control my-3" placeholder="Enter your Phone Number" />
            <input defaultValue={props.EmailIDValue} onChange={(event)=>setEmailID(event.target.value)} class="form-control my-3" placeholder="Enter your EmailID" />
            <select value={Service} onChange={(event) => setService(event.target.value)} className="form-control my-3">
                <option value="">Please Select a Service</option>
                <option value="Eldrens Boarding">Eldrens Boarding</option>
                <option value="Eldrens Feeding">Eldrens Feeding</option>
                <option value="Eldrens Grooming">Eldrens Grooming</option>
                <option value="Eldrens Training">Eldrens Training</option>
                <option value="Eldrens Training">Eldrens Treatment</option>
            </select>
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}

export default ServiceForm;
