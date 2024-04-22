import Axios from "axios";
import { useEffect, useState } from "react";
import ServiceListRow from "./ServiceListRow";

function ServiceList()
{
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://eldrencruddeployment.onrender.com/ServiceRoute/")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=> alert(err));
    },[]);

    const ListItems = () =>{
        return arr.map((val,ind)=>{  
            return <ServiceListRow obj={val}/>
        })
    }
    return (
        <table style={{maxWidth:"60%", margin: "50px auto"}} class="table table-bordered table-striped table-success">
            <thead>
                <tr>
                    <th class="text-center">Name</th>
                    <th class="text-center">ID</th>
                    <th class="text-center">Phone</th>
                    <th class="text-center">EmailID</th>
                    <th class="text-center">Service</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )
}
export default ServiceList;
