import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoFooter from './components/TodoFooter';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>TODO</h1>
                <TodoForm />
                <h2>TODOS</h2>
                <TodoList />
                <TodoFooter />
            </div>
        </Provider>
    );
}

export default App;