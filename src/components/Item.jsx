import React from "react";

const Item = ({ item, deleteItem, editItem }) => {
    return (
        <div className="item">
            <div>{item.name}</div>
            <div className="price">${item.price}</div>
            <i
                className="fa-regular fa-trash-can"
                onClick={() => deleteItem(item.id)}
            ></i>
            <i
                className="fa-regular fa-pen-to-square edit"
                onClick={() => editItem(item.id)}
            ></i>
        </div>
    );
};

export default Item;
