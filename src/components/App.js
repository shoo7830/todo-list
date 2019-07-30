import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInputContainer from '../containers/TodoInputContainer';
import TodoListContainer from '../containers/TodoListContainer';

const initialTodos = new Array(500).fill(0).map(
    (foo, index) => ({id: index, text: `일정 ${index}`, done: false})
);

class App extends Component {
    render() {
        return (
            <PageTemplate>
                <TodoInputContainer />
                <TodoListContainer />
            </PageTemplate>
        )
    }
}

export default App;