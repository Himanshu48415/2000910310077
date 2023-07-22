import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Register = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        ownerName: '',
        rollNo: '',
        ownerEmail: '',
        accessCode: '',
      });

      const [data, setdata] = useState(null);
      const [data1, setdata1] = useState(null);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const API_URL = 'http://20.244.56.144/train/register';
        axios
          .post(API_URL,formData)
          .then((response) => {
            console.log(response.data);
            setdata(response.data); 
          })
          .catch((error) => {
            console.error('Error fetching train data:', error);
          });
        console.log(formData);
      };


      useEffect(()=>{
        if(data != null){
        const API_URL = 'http://20.244.56.144/train/auth/';
        axios
          .post(API_URL,data)
          .then((response) => {
            console.log(response.data);
            setdata1(response.data); 
          })
          .catch((error) => {
            console.error('Error fetching train data:', error);
          });
        }
      },[data])

      console.log(data)

      // Your api backend Is giving an error of accesscode invalid I think so we need the backend to clarify and resolve the error
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Input Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ownerName">Owner Name:</label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="rollNo">Roll No:</label>
          <input
            type="text"
            id="rollNo"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ownerEmail">Owner Email:</label>
          <input
            type="email"
            id="ownerEmail"
            name="ownerEmail"
            value={formData.ownerEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="accessCode">Access Code:</label>
          <input
            type="text"
            id="accessCode"
            name="accessCode"
            value={formData.accessCode}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Register
