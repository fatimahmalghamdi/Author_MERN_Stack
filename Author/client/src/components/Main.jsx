import React, {useState} from "react";
import axios from "axios";
import styles from "./styles.module.css"
import { Link, useHistory } from "react-router-dom"

function Main (props){
    const history= useHistory();
    const [author, setAuthor] = useState({
        author_name: ""
    });
    const [createdSuccess, setCreatedSuccess] = useState(false);
    const [theErrors, setTheErrors] = useState([]);

    function handleChange(event){
        setAuthor({author_name: event.target.value});
        console.log(author.author_name)
    }

    function handleSubmit (event){
        event.preventDefault();
        setCreatedSuccess(false);
        setTheErrors([]);

        axios.post("http://localhost:8000/api/authors/new", author)
                .then(res => {
                    console.log(res);
                    setCreatedSuccess(true);
                })
                .catch(err => {
                    const mydata = err.response.data;
                    const errorMessages = [];
                    if ("error" in mydata){
                        errorMessages.push(mydata.message); 
                        }
                    setTheErrors(errorMessages);
                })
    }

    return(
        <div className={styles.mycontainer}>
            <div className={styles.mybox}>
                <h3>Favorite Authors</h3>
                <h5><Link to={"/"}>Home</Link></h5>
                {theErrors.map((err,index) => 
                    (<div style={{color: "red"}} key={index}>Error: {err}</div>)
                )}
                {createdSuccess && <div style={{color: "green"}}> The Author has been added successfully</div>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name: </label>
                        <input type="text" name="name" value={author.author_name} onChange={handleChange} />
                    </div>
                    <div className={styles.mybutton}>
                        <button>Submit</button>
                    </div>
                </form>
                        <button onClick={() => {history.push("/")}}>Cancel</button>
            </div>

        </div>

    );


}

export default Main;