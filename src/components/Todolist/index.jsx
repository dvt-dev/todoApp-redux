import { Row, Col, Input, Select, Tag, Button, Space } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useRef, useState } from "react";
import {
    searchTextSelector,
    todosRemainingSelector,
} from "../../redux/selectors";

const Todolist = () => {
    const [todoName, setTodoName] = useState("");
    const [priority, setPriority] = useState("Medium");
    const inputRef = useRef();
    const selectRef = useRef();

    const todoList = useSelector(todosRemainingSelector);
    const searchText = useSelector(searchTextSelector);
    console.log({ todoList, searchText });

    const dispatch = useDispatch();

    const handleAddTodo = () => {
        dispatch(
            addTodo({
                id: uuidv4(),
                name: todoName,
                priority: priority,
                completed: false,
            })
        );
        setTodoName("");
        inputRef.current.focus();
        setPriority("Medium");
        // selectRef.current.value = "Medium";
        //    window.location.reload();
    };

    const handleInputChange = (e) => {
        setTodoName(e.target.value);
    };

    const handleSelectChange = (value) => {
        setPriority(value);
    };
    return (
        <Row style={{ height: "100vh" }}>
            <Col
                span={24}
                style={{
                    height: "calc(100% - 42px)",
                    overflowY: "auto",
                    maxHeight: 240,
                    marginBottom: 10,
                }}
            >
                {todoList.map((todo) => (
                    <Todo
                        key={todo.id}
                        name={todo.name}
                        priority={todo.priority}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Space.Compact style={{ display: "flex" }} compact="true">
                    <Input
                        ref={inputRef}
                        value={todoName}
                        onChange={handleInputChange}
                    />
                    <Select
                        ref={selectRef}
                        defaultValue="Medium"
                        onChange={handleSelectChange}
                    >
                        <Select.Option value="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type="primary" onClick={handleAddTodo}>
                        Add
                    </Button>
                </Space.Compact>
            </Col>
        </Row>
    );
};

export default Todolist;
