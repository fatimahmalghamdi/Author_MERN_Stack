import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css"
import { Link, useHistory } from "react-router-dom";


function ListAuthors (props) {
    const history = useHistory();
    const [authorList, setAuthorList] = useState([])

    React.useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthorList(res.data.authors))
            .catch(err => console.log(err))
    }, [])


    function handledelete(author_id){
        axios.delete("http://localhost:8000/api/authors/delete/"+author_id)
            .then(res => {
                setAuthorList(authorList.filter((u) => u._id !== author_id));
            })
    }


    return (
        <div style={{ margin: "auto", width: "700px", marginTop: "30px"}}>
            <h3>Favorite Authors</h3>
            <h5><Link to={"/new"}>Add an Author</Link></h5>
            <table width= "100%" style={{border: "2px solid black"}}>
                <thead style={{backgroundColor: "lightgray"}}>
                    <tr>
                        <td>Author</td>
                        <td>Actions Available</td>
                    </tr>
                </thead>
                <tbody>
                    {authorList.map((author,i) => (
                        <tr key={author._id}>
                            <td>{author.author_name}</td>
                            <td>
                                <div className={styles.mybutton}>
                                    <button onClick={() => {history.push(`/update/${author._id}`)}}>Edit</button>
                                    <button onClick={() => handledelete(author._id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default ListAuthors;