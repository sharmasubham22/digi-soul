import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
const SecondBlog = (props) => {
    
        const [comments, setComments] = useState([]);
        const [newComment, setNewComment] = useState("");
      
        const handleSubmit = (event) => {
          event.preventDefault();
          setComments([...comments, newComment]);
          setNewComment("");
        };
    return (
        
        <div style={{ backgroundColor: "#C5C6D0" }}>
        <div className="container">
        <h1>The future of AI?</h1>
        
        <img src="https://www.priv.gc.ca/media/5716/synthetic-data.png" alt = " not available" height='400' width='400'/>
        <hr/>
        <p> 
            The future of artificial intelligence is difficult to predict with certainty, but it is expected to have a significant impact on various industries and aspects of society. Here are a few potential developments in the field of AI:

            Advancements in Natural Language Processing : AI systems will continue to improve in their ability to understand and respond to human language, leading to more widespread adoption of AI-powered virtual assistants and chatbots.

            Increased Autonomy: AI systems will become more autonomous, allowing them to make decisions and take actions without human intervention. This will lead to the development of new applications in fields such as self-driving cars, robotics, and medicine.

            Improved Human-AI Interaction: The development of new technologies, such as augmented and virtual reality, will enable more natural and intuitive interactions between humans and AI systems.        </p>
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

export default SecondBlog;