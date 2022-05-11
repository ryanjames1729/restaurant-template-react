import React, { Component } from 'react'

const Drinks = ({ items }) => {

    return (
        <div className="mainSection" id="drinks">
            <div className="container">
                <h1>Celebrations and Libations</h1>   
                <div className="menu">
                    {items.map((item) => (
                        <div className="menuItem" key={item.id}>
                            <h1>{item.name}</h1>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>    
            </div>
        </div>
    )
  }

export default Drinks


