import React, {Component} from 'react'
import PropTypes from "prop-types"


export class Todoitem extends Component {
    makeStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todos.complete ?
                'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todos
        return (
            <div style={this.makeStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                    {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        );
    }

}

//PropTypes
Todoitem.propTypes = {
    todos: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fffff',
    border: 'node',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default Todoitem;