import { useState } from "react";
import ItemInput from "./components/ItemInput";
import Items from "./components/Items";
import Total from "./components/Total";

function App() {
    const [items, setItems] = useState([
        {
            id: Math.floor(Math.random() * 10000),
            name: "Groceries",
            price: "200",
        },
        { id: Math.floor(Math.random() * 10000), name: "Paint", price: "500" },
        { id: Math.floor(Math.random() * 10000), name: "Car", price: "900" },
        {
            id: Math.floor(Math.random() * 10000),
            name: "Gardening",
            price: "300",
        },
    ]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [edit, setEdit] = useState({})

    const editItem = (id) => {
        setIsEditing(true);

        const itemToBeEdited = items.find((item) => item.id == id)
        setName(itemToBeEdited.name);
        setPrice(itemToBeEdited.price);
        setEdit({
            itemToBeEdited: itemToBeEdited,
            index: items.findIndex((item) => item.id == id),
        })
    };

    const updateItem = () => {
        let newItems = [...items];
        newItems[edit.index] = {
            ...edit.itemToBeEdited,
            name: name,
            price: price,
        };
        setItems(newItems)
        setName("");
        setPrice("");
        setIsEditing(false);
    };

    return (
        <>
            <ItemInput
                items={items}
                setItems={setItems}
                name={name}
                setName={setName}
                price={price}
                setPrice={setPrice}
                updateItem={updateItem}
                isEditing={isEditing}
            />
            <Items items={items} setItems={setItems} editItem={editItem} />
        </>
    );
}

export default App;
