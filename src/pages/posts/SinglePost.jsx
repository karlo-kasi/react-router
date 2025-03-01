//import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SinglePost = () => {

    const { id } = useParams()

    return (
        <h1>Single Post: {id}</h1>
    )
}

export default SinglePost;