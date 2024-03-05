import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filter.searchText;
export const todoListSelector = (state) => state.todoList;

// export const todoListSelector = (state) => {
//     const todoListRemaning = state.todoList.filter((todo) => {
//         return todo.name.includes(state.filter.searchText);
//     });

//     return todoListRemaning;
// };

export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    (todoList, searchText) => {
        return todoList.filter((todo) => {
            return todo.name.includes(searchText);
        });
    }
);
