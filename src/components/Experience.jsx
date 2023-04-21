import { useEffect, useState } from "react";

export default function Experience() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getExperience = async() =>{
            let res = await fetch("/jsonData/experience.json");
            let jsondata = await res.json();
            setData(jsondata);
        };  
        getExperience();
    }, []);

    return(
        <div className="experienceContainer">
            {data.map((d) => (
                <div key={d.id}>
                    <h3>{d.title}</h3>
                    <h5>{d.company_name}</h5>
                    <p>{d.job_description}</p>
                    <p><b><i>{d.start_at} - {d.end_at}</i></b></p>
                </div>
            ))}
        </div>
    );
}