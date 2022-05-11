import React, { Component } from 'react'

const Mains = ({ items }) => {

    return (
        <div className="mainSection" id="mainDish">
            <div className="container">
                <h1>Bring On the Main</h1>   
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

export default Mains


