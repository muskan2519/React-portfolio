import { useEffect, useState } from "react";

export default function Education() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getEducation = async() =>{
            let res = await fetch("/jsonData/education.json");
            let jsondata = await res.json();
            setData(jsondata);
        };  
        getEducation();
    }, []);

    return(
        <div className="experienceContainer">
            {data.map((d) => (
                <div key={d.id}>
                    <h3>{d.school_name}</h3>
                    <h5>{d.education_level}</h5>
                    <p><b><i>{d.start_at} - {d.end_at}</i></b></p>
                </div>
            ))}
        </div>
    );
}