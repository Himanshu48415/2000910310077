import React,{useState ,useEffect} from 'react'
import axios from 'axios'

const TrainList = () => {
    const [trainList, setTrainList] = useState([]);

    useEffect(() => {
        const API_URL = 'http://20.244.56.144:80/train/trains';
        axios
          .get(API_URL)
          .then((response) => {
            console.log(response.data);
            setTrainList(response.data); 
          })
          .catch((error) => {
            console.error('Error fetching train data:', error);
          });
      }, []);
    

  return (
    <div>
          <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Train Schedule</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2">Train Name</th>
            <th className="py-2">Train Number</th>
            <th className="py-2">Departure Time</th>
            <th className="py-2">Available Seats</th>
            <th className="py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {/* {trainList?.map((train, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{train.name}</td>
              <td className="border px-4 py-2">{train.number}</td>
              <td className="border px-4 py-2">{train.departureTime}</td>
              <td className="border px-4 py-2">{train.seats}</td>
              <td className="border px-4 py-2">{train.price}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>

    </div>
  )
}

export default TrainList
