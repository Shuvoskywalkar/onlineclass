import React from 'react';

const cart = (props) => {
    const cart=props.Cart
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        total=total+element.price
    }
 



   
    return (
        <div className="my-5 p-5">
            <div>
            <h4>Enrolled Courses:{cart.length} </h4>
    <h4>Total Price:{total}</h4>
        </div>
        </div>
    );
};

export default cart;