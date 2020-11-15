
import React, { useState, useEffect } from 'react';
import './App.css'


function ItemDetail({match}) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {   
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/todos/${match.params.id}`) ;
        const item =await fetchItem.json();
        setItem(item); // need to set the item in here
        console.log(item);

    }

    return (
        <div>
           <h1>Item ID : {item.id}</h1>
           <h1>Item UserID : {item.userId}</h1>
           <h1>Item Title : {item.title}</h1>
           <h1>Item Complete : {item.completed? "true" : "false"}</h1>
        </div>
    );
}

export default ItemDetail;
