import React, { Component } from 'react'

const Desserts = ({ items }) => {

    return (
        <div className="mainSection" id="desserts">
            <div className="container">
                <h1>Sweet Treats</h1>   
                <div className="menu">
                    {items.map((item) => (
                        <div className="menuItem" key={item.id} style={{ backgroundColor: "#533E2D" }}>
                            <h1>{item.name}</h1>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>    
            </div>
        </div>
    )
  }

export default Desserts


