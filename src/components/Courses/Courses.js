import React from 'react';

import './Courses.css'

const product = (props) => {
    console.log(props.product)
    const { img, name, category, price } = props.product
    return (

        <div className="d-flex align-items-center mx-5 p-5">        
            <div className="courseListed">
                {/* <h2 className="list">//Course list:</h2> */}
                <br/>
                <br/>
                <div className="courseList" >
                <img classname="img-fluid " src={img} alt="not showing" />
                <h3 >Course Name:{name}</h3>
            <h5> Catagory::{category}</h5>
    <h5>Course Value:::{price}</h5>
        <button onClick={()=>props.clickHandle(props.product)} 
        className='btn btn-success'>
         Add to your Cart??</button>
         </div>
         </div>
         </div>
    );
};

export default product;