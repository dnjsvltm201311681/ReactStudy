import React, { Component } from "react";
import Habit from "./habit";

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
  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            habit={habit}
            key={habit.id}
            onIncrement={this.handleIncrease}
            onDecrement={this.handleDecrease}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}
