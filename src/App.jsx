import { Divider, Typography } from "antd";
import "./App.css";
import Filters from "./components/Filters";
import Todolist from "./components/Todolist";

function App() {
    const { Title } = Typography;
    return (
        <div
            style={{
                width: 500,
                margin: "0 auto",
                padding: 20,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                boxShadow: "0 0 10px 4px #bfbfbf",
                borderRadius: 5,
                height: "90vh",
            }}
        >
            <Title style={{ textAlign: "center" }}>TODO APP WITH REDUX</Title>
            <Filters />
            <Divider />
            <Todolist />
        </div>
    );
}

export default App;
