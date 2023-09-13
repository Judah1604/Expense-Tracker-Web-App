import "../Styles/components/card.css";

const ItemInput = ({
    items,
    setItems,
    name,
    setName,
    price,
    setPrice,
    isEditing,
    updateItem,
}) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !price) {
            return;
        } else {
            const newItem = {
                id: Math.floor(Math.random() * 10000),
                name: name,
                price: price,
            };
            const newItems = [newItem, ...items];

            setItems(newItems);

            setName("");
            setPrice("");
        }
    };

    return (
        <div className="input-card card">
            <div className="form" action="#">
                <input
                    type="text"
                    placeholder="Expense name ..."
                    className="name-input"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name="name"
                />
                <div className="price">
                    $
                    <input
                        type="number"
                        placeholder="Price ..."
                        className="price-input"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                    />
                </div>
                {isEditing ? (
                    <button onClick={updateItem}>Update</button>
                ) : (
                    <button type="submit" onClick={handleSubmit}>
                        Add
                    </button>
                )}
            </div>
        </div>
    );
};

export default ItemInput;
