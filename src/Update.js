import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import React, { useState } from 'react';

function Update() {
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');
  const [pp, setPP] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDOB] = useState('');
  const [percentage, setPercentage] = useState('');
  const {id} =useParams();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.put("your-api-endpoint/update/"+ id, { name, relation, pp, phone, dob, percentage }) // Replace "your-api-endpoint" with the actual API endpoint
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
          <h2>Update</h2>

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
            <label htmlFor="relation">Relation</label>
            <input
              type="text"
              id="relation"
              placeholder="Enter relation"
              className="form-control"
              onChange={e => setRelation(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="pp">PP</label>
            <input
              type="text"
              id="pp"
              placeholder="Enter PP"
              className="form-control"
              onChange={e => setPP(e.target.value)}
            />
          </div>


          <div className="mb-2">
            <label htmlFor="email">Phone</label>
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

          <button type="submit" className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
