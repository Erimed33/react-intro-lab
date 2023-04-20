import React from "react";
import ContactUserCard from "./ContactUserCard";
//child

function Contacts() {
    return (
       <div>
        <img src="profile.png" alt="profile_img" />
        <ContactUserCard/>
        <img src="profile.png" alt="profile_img" />
        <ContactUserCard/>
        <img src="profile.png" alt="profile_img" />
        <ContactUserCard/>
        <img src="profile.png" alt="profile_img" />
        <ContactUserCard/>
       </div>
    )
   }



export default Contacts;