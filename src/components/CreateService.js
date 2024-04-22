import { useState } from "react";
import ServiceForm from "./ServiceForm";
import Axios from "axios";

function CreateService()
{
    const [arr,setArr] = useState([]); //arr=[Raj,raj@gmail.com,1]

    //Declaring a argument function
    const getState = (childData) => { //childData=[Raj,raj@gmail.com,1]
        setArr(childData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {Name: arr[0],ID:arr[1],Phone: arr[2],EmailID:arr[3],Service:arr[4]};
        Axios.post("https://eldrencruddeployment.onrender.com/ServiceRoute/create-Service",data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record added successfully");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <ServiceForm getState={getState}
                    NameValue=""
                    IDValue=""
                    Phone Value=""
                    EmailIDValue=""
                    ServiceValue="">
                Create Service
            </ServiceForm>
        </form>
    )
}
export default CreateService;
