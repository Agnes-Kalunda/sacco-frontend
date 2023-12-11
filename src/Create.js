import { useNavigate , Link} from "react-router-dom";
import axios from 'axios';
import React, { useState } from 'react';

function Create() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post("your-api-endpoint/create", { name, email }) // Replace "your-api-endpoint" with the actual API endpoint
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          {/* <Link to='/create' className='btn btn-success' style={{marginLeft:"0%"}}>Add +</Link> */}

          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              className="form-control"
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
