const initState = [
    {
        id: 1,
        name: "Learn Redux",
        completed: false,
        priority: "Medium",
    },
    {
        id: 2,
        name: "Learn ReactJs",
        completed: true,
        priority: "High",
    },
    {
        id: 3,
        name: "Learn Git",
        completed: false,
        priority: "Low",
    },
];

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            console.log(action);
            return [...state.todoList, action.payload];

        default:
            return state;
    }
};

export default todoListReducer;
