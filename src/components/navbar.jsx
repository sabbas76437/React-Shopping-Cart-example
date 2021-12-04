import React, { Component } from 'react';

class Navbar extends React.Component {
    styles ={
        fontSize : 100,
        fontWeight: 'bold'
    }
    render() { 
        return <nav class="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a style = {{fontsize : '20px'}} className="navbar-brand" href="#">Shopping List</a>
        </div>
      </nav>;
    }
}
 
export default Navbar;