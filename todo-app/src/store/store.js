import { configureStore, createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        list: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.list.push(action.payload);
        }
    }
});

export const { addTodo } = todosSlice.actions;

const store = configureStore({
    reducer: {
        todos: todosSlice.reducer
    }
});

export default store;