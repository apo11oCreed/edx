import React, { Component } from 'react';

class AddItem extends Component {

  constructor() {
    super();
    this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
      
      // Implement the rest of this function here!
      var name=e.target.querySelector('input[type=text]').value;
      var list=this.props.idName;
      function addItemThing(e1,e2){
        var obj={
          name:e1,
          list:e2
        }
        return obj;
      }
      this.setState({newItemName:addItemThing(name,list)},function(){
        this.props.addItem(this.state.newItemName);
      });
  }
    

  render() {
    var divName = 'add' + this.props.idName;
    return (
      <div className='addItemDiv'>
      <h4>Add {this.props.idName}</h4>
      <form ref='form' onSubmit={this.handleSubmit.bind(this)}>
      <div id={divName} ref={divName}>
        <label>Name</label><br />
        <input type='text' ref='id' />
        </div>
        <br />
        <input type='submit' value='Submit' />
        <br />
      </form>
      </div>
    );
  }

}

export default AddItem;
