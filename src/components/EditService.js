import { useParams } from "react-router-dom";
import ServiceForm from "./ServiceForm";
import { useEffect, useState } from "react";
import Axios from "axios";

function EditService() {
    const { id } = useParams();
    const [initialValue, setInitialValue] = useState({ Name: "", ID: "", Phone: "", EmailID: "", Service: "" });
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        Axios.get("https://eldrencruddeployment.onrender.com/ServiceRoute/update-Service/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { Name,  ID , Phone , EmailID , Service } = res.data;
                    setInitialValue({ Name, ID , Phone , EmailID , Service   });
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }, [id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = { Name: newData[0], ID: newData[1], Phone: newData[2],EmailID: newData[3],Service: newData[4] };
        Axios.put("https://crud-deployment-backend-15pi.onrender.com/ServiceRoute/update-Service/" + id, data)
            .then((res) => {
                if (res.status === 200)
                    alert("Record updated successfully")
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <ServiceForm getState={getState}
                NameValue={initialValue.Name}
                IDValue={initialValue.ID}
                PhoneValue={initialValue.Phone}
                EmailIDValue={initialValue.EmailID}
                ServiceValue={initialValue.Service}
                >
                    Update Service
            </ServiceForm>
        </form>
    )
}
export default EditService;
