import React, { Component } from 'react';
import TodoInput from '../components/TodoInput';

import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';

import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todos';

class TodoInputContainer extends Component {
    id = 1
    getId = () => {
        reutrn ++this.id;
    }

    handleChange = (e) => {
        const { value } = e.target;
        const { inputActions } = this.props;
        inputActions.setInput(value);
    }

    handleInsert = () => {
        const { inputActions, todosActions, value} = this.props;
        const todo = {
            id: this.getId(),
            text: value,
            done: false
        };
        todosActions.insert(todo);
        inputActions.setInput('');
    }
    render() {
        const { value } = this.props;
        const { handleChange, handleInsert} = this;
        return (
            <TodoInput
                onChange={handleChange}
                onInesert={handleInsert}
                value={value} />
        )
    }
}

export default connect(
    (state) => ({
        value: state.input.get('value')
    }),
    (dispatch) => ({
        inputActions: bindActionCreators(inputActions, dispatch),
        todosActions: bindActionCreators(todosActions, dispatch)
    })
)(TodoInputContainer);