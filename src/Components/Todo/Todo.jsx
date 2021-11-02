import React, { Component } from "react";
import MTime from "../Time/Time";
import "./Todo.css";

class Todo extends Component {
  //creating an event constructor
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    // function of adding to the storage of elements
    this.setState({
      [key]: value,
    });
  }

  addItem() {
    // create an element with a unique identifier
    const newItem = {
      id: 1 + Math.random(), // assigning a unique identifier
      value: this.state.newItem.slice(),
    };

    // copy the elements of the current list
    const list = [...this.state.list];

    // add a new item to the list
    list.push(newItem);

    // update the state of the combo box and discard the input of the new item
    this.setState({
      list,
      newItem: "",
    });
  }
  deleteItem(id) {
    // copy the current list of items
    const list = [...this.state.list];
    // filter the removed item

    const updatedList = list.filter((item) => item.id !== id);

    // update the list after deleting the object
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App_block">
        <div className="AppTodo">
          <div className="TodoContent">
            <div className="TodoHeader">Список дел</div>
            <br />
            <div className="TodoInput">
              <input
                className="Input"
                type="text"
                placeholder="Ввести"
                value={this.state.newItem}
                onChange={(e) => this.updateInput("newItem", e.target.value)}
              />
              <button className="btn-in" onClick={() => this.addItem()}>
                Добавить
              </button>
            </div>
            <br />
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li className="Output" key={item.id}>
                    {item.value}
                    <button
                      className="btn-del"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Удалить
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div>
          <MTime />
        </div>
        
      </div>
    );
  }
}

export default Todo;
