import React, { Component } from 'react'
import Habit from './habit'

export default class Habits extends Component {
    state = {
        habits: [
            {id:1,name: 'Reading',count:0},
            {id:2,name: 'Running',count:0},
            {id:3,name: 'Coding',count:0},
        ]
    }

    handleIncrease = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({habits})
    }
    handleDecrease = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count -1;
        habits[index].count = count < 0 ? 0 :count;
        this.setState({habits})
    }
    handleDelete = (habit) => {
        const habits =this.state.habits.filter(item => item.id !== habit.id);
        this.setState({habits});

    }
  render() {
    return (
      <ul>
          {this.state.habits.map((habit) => (
              <Habit
                habit={habit}
                key={habit.id}
                onIncrement={this.handleIncrease}
                onDecrement={this.handleDecrease}
                onDelete={this.handleDelete}
               />
          ))}
      </ul>
    )
  }
}
