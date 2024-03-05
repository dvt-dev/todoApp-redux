import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Todo = ({ name, priority }) => {
    const [checked, setChecked] = useState(false);
    const toggleChecked = () => {
        setChecked(!checked);
    };
    const priorityColorMapping = {
        High: "red",
        Medium: "blue",
        Low: "gray",
    };
    return (
        <div>
            <Row
                justify="space-between"
                style={{
                    marginBottom: 3,
                    ...(checked
                        ? { opacity: 0.5, textDecoration: "line-through" }
                        : {}),
                }}
            >
                <Checkbox checked={checked} onChange={toggleChecked}>
                    {name}
                </Checkbox>
                <Tag color={priorityColorMapping[priority]}>{priority}</Tag>
            </Row>
        </div>
    );
};

export default Todo;
