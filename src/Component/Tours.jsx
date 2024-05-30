import React from 'react';
import Card from './Card';

function Tours({tours,removeTour}) {
  return (

    <div className="container">

        <div>
            <h2 className="title">Plan with Love</h2>
        </div>

        {/* div that contains all cards */}
        <div className="cards">
            {
                // tours ka data map krwaaya with arrow function such that har ek single tour maps with a Card
                tours.map( (tour) => { 
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                })
            }  
        </div>

    </div>
  )
}

export default Tours;