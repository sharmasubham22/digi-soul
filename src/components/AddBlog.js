import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const AddBlog = (props) => {
        const history = useHistory();
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const [image, setImage] = useState(null);
      
        const handleSubmit = (event) => {
          event.preventDefault();
          console.log("Title:", title);
          console.log("Description:", description);
          console.log("Image:", image);
          history.push('/');

          // Perform submit logic here (e.g. sending data to a server)
        };
      
        return (
        <div class="form-group row" style={{ backgroundColor: "#C5C6D0" }}>
          <form  onSubmit={handleSubmit}>
            <h2>Add New Blog</h2>
            <div class="col-sm-10">
            <input
              type="text"
              value={title}
              placeholder="Set title"
              onChange={(event) => setTitle(event.target.value)}
            />
            </div>
            <br></br>
            <div class="col-sm-10">
            {/* <h2>Description for Title</h2> */}
            <textarea
              value={description}
              placeholder="Content"
              onChange={(event) => setDescription(event.target.value)}
            />
            </div>
            <br></br>
            <h4>Choose Image</h4>
            <input
              type="file"
              onChange={(event) => setImage(event.target.files[0])}
            />
            <button type="submit" onClick={handleSubmit} href="/">Submit</button>
          </form>
          </div>
        );
      }

export default AddBlog;