import React,{useState} from 'react';
import data from './data';
import Tours from './Component/Tours';

const App = () => {



  const [tours, setTours] = useState(data); // initially, tours me data.js ka pura data daal dia

  //remove that tour jiski id input id se match krjaye and newTours ki list ban jayegi
  function removeTour(id){
    const newTours = tours.filter( tour => tour.id !== id); 
    setTours(newTours);   // newTours is assigned to tours
  }

  // agr no tours left hai then we want a different UI to be displayed
  if(tours.length === 0){
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        {/* refresh btn pe click krke original tours ka list aajaye therefore setTours to data */}
        <button className="btn-white" onClick={ ()=> setTours(data) } >Refresh</button>
      </div>
    );
  }

  return (

    // ek div k andar Tours component banao
    <div className="App"> 
      <Tours tours={tours} removeTour={removeTour}></Tours> 
    </div>
  )
};

export default App
