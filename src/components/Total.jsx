import React, { useEffect, useState } from "react";

const Total = ({ items }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotal = () => {
        let total = 0

        for (const item of items) {
            total += Number(item.price)
            setTotalPrice(total)
        }
    };

    useEffect(calculateTotal, [items])

    return (
        <div className="item total">
            <div>Total</div>
            <div className="price">${totalPrice}</div>
        </div>
    );
};

export default Total;
