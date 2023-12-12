import { useNavigate , Link} from "react-router-dom";
import axios from 'axios';
import React, { useState } from 'react';

function Create() {
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');
  const [pp, setPP] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDOB] = useState('');
  const [percentage, setPercentage] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post("your-api-endpoint/create", { name, relation, pp, phone, dob, percentage}) // Replace "your-api-endpoint" with the actual API endpoint
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
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
            <label htmlFor="email">Relation</label>
            <input
              type="text"
              id="relation"
              placeholder="Enter relation"
              className="form-control"
              onChange={e => setRelation(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="pp">Passport</label>
            <input
              type="text"s
              id="pp"
              placeholder="Enter Passport Number"
              className="form-control"
              onChange={e => setPP(e.target.value)}
            />
          </div>


          <div className="mb-2">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              placeholder="Enter Phone Number"
              className="form-control"
              onChange={e => setPhone(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="dob">DOB</label>
            <input
              type="text"
              id="dob"
              placeholder="Enter Date of birth"
              className="form-control"
              onChange={e => setDOB(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="percentage">Percentage</label>
            <input
              type="text"
              id="percentage"
              placeholder="Enter percentage assigned"
              className="form-control"
              onChange={e => setPercentage(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
