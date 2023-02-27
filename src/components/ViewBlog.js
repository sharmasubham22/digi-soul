import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
const ViewBlog = (props) => {
    
        const [comments, setComments] = useState([]);
        const [newComment, setNewComment] = useState("");
      
        const handleSubmit = (event) => {
          event.preventDefault();
          setComments([...comments, newComment]);
          setNewComment("");
        };
    return (
        
        <div style={{ backgroundColor: "#C5C6D0" }}>
        <div className="container" >
        <h1>Will AI takeover the world?</h1>
        
        <img src="https://www.priv.gc.ca/media/4847/ai.jpg" alt=" not available" height='400' width='400'/>
        <hr/>
        <p> 
        No, AI will not take over the world. AI is a tool created by humans and its behavior is determined by how it is programmed and used. While AI has the potential to greatly benefit society and improve our lives, it is important that its development and deployment are guided by ethical and moral considerations. Additionally, there are technical and practical limitations to what AI can currently do, and it is unlikely that it will surpass human intelligence and agency in the near future. Ultimately, the future of AI depends on the choices and actions of humans, and we must strive to ensure that it is used for the betterment of society.
        </p>
        </div>
        <div >
        {/* <h3>Comment Box</h3> */}
       
        <form onSubmit={handleSubmit} class="container-fluid">
            <textarea class="form" 
            placeholder="Comment box"
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
            />
            <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
        <h2>Comments:</h2>
        <ul>
            {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
            ))}
        </ul>
        </div>
        </div>
        
    );
};

export default ViewBlog;