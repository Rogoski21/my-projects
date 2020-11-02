import React, {Component} from "react"

import Todos from "./components/Todos";
import './App.css';


class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Take the trash out',
                complete: false
            },
            {
                id: 2,
                title: 'Prepare dinner',
                complete: false
            },
            {
                id: 3,
                title: 'Meeting with boss',
                complete: false
            }
        ]
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.complete = !todo.complete
                }
                return todo
            })
        })
    }

    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo=> todo.id !== id)] })
        }

    render() {
        return (
            <div>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </div>
        )
    }
}

export default App;
