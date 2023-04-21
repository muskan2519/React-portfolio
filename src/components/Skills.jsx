import { useEffect, useState } from "react";

export default function Skills() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getSkills = async() =>{
            let res = await fetch("/jsonData/skills.json");
            let jsondata = await res.json();
            setData(jsondata);
        };  
        getSkills();
    }, []);

    return(
        <div className="skillsContainer">
            {data.map((d) => (
                <div key={d.id}>
                    <h3>{d.title}</h3>
                </div>
            ))}
        </div>
    );
}