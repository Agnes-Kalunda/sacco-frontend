import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function OptIn() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios.get("your-api-endpoint") // Replace "your-api-endpoint" with the actual API endpoint
      .then(res => setStudent(res.data))
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
      <div className="w-50 bg-white rounded p-3 mx-3"> {/* Updated margin class to mx-3 */}
        <Link to="create" className="btn btn-success" style={{marginLeft:'1%'}}> Add + </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {student.map((data, i) => (
              <tr key={i}>
                <td>{data.Name}</td>
                <td>{data.Email}</td>

                <td>
                  <Link to={`update/${data.ID}`} className='btn btn-primary'>Update</Link>
                  <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.ID)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OptIn;
