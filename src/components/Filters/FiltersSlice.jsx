const initState = {
    searchText: "",
    statusFilter: "all",
    priorityFilter: [],
};

const filtersReducer = (state = initState, action) => {
    switch (action.type) {
        case "filter/searchFilterChange":
            return {
                ...state,
                searchText: action.payload,
            };
        default:
            return state;
    }
};

export default filtersReducer;
