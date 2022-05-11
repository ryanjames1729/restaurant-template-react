import React, { Component } from 'react'

const Starters = ({ items }) => {

    return (
        <div className="mainSection" id="starters">
            <div className="container">
                <h1>Lets Get This Started</h1>   
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

export default Starters


