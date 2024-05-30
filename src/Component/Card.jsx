import { useState } from 'react';

function Card({id,image,name,info,price,removeTour}) {


    const [readmore, setReadMore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....`; // initially,200 characters display ho baki readmore me chale jaye

    function readmoreHandler(){
        setReadMore(!readmore);   // if read more is displayed then now display show less
    }

  return (

    <div className="card">

        <img src={image} className="image"></img>

        <div className="tour-info">
            <div className="tour-details">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>

            <div className="description">
                {/* 200 characters:normal display. if readmore true: show less is displayed else read more is displayed */}
                {description}
                {/* we want readmore ya show less pe click krne se vo action perform ho isliye use onclick */}
                <span className="read-more" onClick={readmoreHandler} > {readmore ? `show less` : `read more`} </span> 
            </div>
        </div>

        {/* button pe click krne se vo particular card hi remove krna hai, */}
        {/* vo particular tour pure data me se hatana hai, or data app.js me padaa h isliye removeTour function bhi app.js me aayega */}
        <button className="btn-red" onClick={() => removeTour(id)} >Not Interested</button>

    </div>

  );

}

export default Card;