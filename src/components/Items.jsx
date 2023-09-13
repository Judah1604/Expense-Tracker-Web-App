import React from "react";
import Item from "./Item";
import Total from "./Total";

const Items = ({ items, setItems, editItem }) => {
    const deleteItem = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    };

    return (
        <>
            <div className="items card">
                {items.map((item, index) => (
                    <Item
                        item={item}
                        deleteItem={deleteItem}
                        editItem={editItem}
                        key={item.id}
                    />
                ))}
                <Total items={items} />
            </div>
        </>
    );
};

export default Items;
