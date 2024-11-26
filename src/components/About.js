import React from "react";

function About ({image,about}) {

    const defaultImage = "http://via.placeholder.com/150";
return (
    <asid>
       <img src={image || defaultImage} alt="blog logo"/> 
        <p>{about}</p>
    </asid>
);
};

export default About;