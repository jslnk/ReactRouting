
import React, { useState, useEffect } from 'react';
import './App.css'
import {Link} from 'react-router-dom';


function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos');

        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    return (
        <div>
            <h1>Shop Page</h1>
            {items.map(items => (
                <h1 key={items.id}>
                    <Link to={`/shop/${items.id}`}>{items.title}</Link>
                    </h1>
            ))}
        </div>
    );
}

export default Shop;
