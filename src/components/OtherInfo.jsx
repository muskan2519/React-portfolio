import { useEffect, useState } from "react";

export default function OtherInfo() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getOtherInfo = async() =>{
            let res = await fetch("/jsonData/otherInfo.json");
            let jsondata = await res.json();
            setData(jsondata);
        };  
        getOtherInfo();
    }, []);

    return(
        <div className="otherInfoContainer">
            {data.map((d) => (
                <div key={d.id}>
                    <h3>{d.title}</h3>
                    <h5>{d.description}</h5>
                </div>
            ))}
        </div>
    );
}