import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

export default class Habits extends Component {
  handleIncrease = (habit) => {
    this.props.onIncrement(habit);
  };
  handleDecrease = (habit) => {
    this.props.onDecrement(habit);
  };
  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };
  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  render() {
    return (
      <div>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrease}
              onDecrement={this.handleDecrease}
              onDelete={this.handleDelete}
              onAdd={this.handleAdd}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset all
        </button>
      </div>
    );
  }
}
