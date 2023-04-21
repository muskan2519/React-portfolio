import { useEffect, useState } from "react";

export default function Projects() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getProjects = async() =>{
            let res = await fetch("/jsonData/projects.json");
            let jsondata = await res.json();
            setData(jsondata);
        };  
        getProjects();
    }, []);

    return(
        <div className="projectsContainer">
            {data.map((d) => (
                <div key={d.id}>
                    <h3>{d.title}</h3>
                    <p className="slug">{d.slug}</p>
                    <a href={d.url}>{d.url}</a>
                    <p><i>{d.content}</i></p>
                    <div className="signed">
                        <i>By</i><br />
                        {d.user.first} {d.user.last} <br />
                        {d.email}
                    </div>
                </div>
            ))}
        </div>
    );
}