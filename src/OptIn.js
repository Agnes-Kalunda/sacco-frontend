import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function OptIn() {
  const [kin, setKin] = useState([]);

  useEffect(() => {
    axios.get("your-api-endpoint") // Replace "your-api-endpoint" with the actual API endpoint
      .then(res => setKin(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("api-end-point" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white">
      <div className="w-75 bg-white rounded p-3 mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: '15%', margin: '10px' }}>Name</th>
              <th style={{ width: '15%', margin: '10px' }}>Relation</th>
              <th style={{ width: '10%', margin: '10px' }}>ID</th>
              <th style={{ width: '15%', margin: '10px' }}>Phone</th>
              <th style={{ width: '15%', margin: '10px' }}>DOB</th>
              <th style={{ width: '15%', margin: '10px' }}>Percentage</th>
              <th style={{ width: '15%', margin: '10px' }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {kin.map((data, i) => (
              <tr key={i}>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>{data.PP}</td>
                <td>{data.Phone}</td>
                <td>{data.DOB}</td>
                <td>{data.Percentage}</td>
                <td>
                  <Link to={`update/${data.ID}`} className='btn btn-primary'>Update</Link>
                  <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.ID)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="create" className="btn btn-success" style={{ marginLeft: '95%' }}>Add</Link>
      </div>
    </div>
  );
}

export default OptIn;
