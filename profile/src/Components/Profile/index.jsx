import {useState} from "react"

/* eslint-disable react/prop-types */
import styles from "./styles.module.css"


export default function Profile(props){
    const [followText,setFollowText] = useState("Follow")

    function handleClick() {
        if(followText === "Follow"){
        setFollowText("Following")}
        else{
            setFollowText("Follow")
        }
    }

    return(
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name}/>
            <div className={name}>
            <h2>{props.name}</h2>
            <button
            className={styles.followButton}
            onClick={handleClick}
            >
                {followText}
            </button>
            </div>
            <div>{props.bio}</div>
            <div>{props.phone}</div>
            <div>{props.email}</div>
            <div className={styles.links}>
                <a href={props.githubUrl} target="_blank">Github</a>
                <a href={props.linkedinUrl} target="_blank">Linkedin</a>
                <a href={props.twitterUrl} target="_blank">Twitter</a>
            </div>
            
        </div>
    )
}