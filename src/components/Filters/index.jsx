import { Row, Col, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchFilterChange } from "../../redux/actions";

const { Search } = Input;
const Filters = () => {
    const [searchText, setSearchText] = useState("");

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        dispatch(searchFilterChange(e.target.value));
    };

    return (
        <div>
            <Row justify={"center"}>
                <Col span={24}>
                    <Typography.Paragraph
                        style={{
                            fontWeight: "bold",
                            marginBottom: "3px",
                            marginTop: 10,
                        }}
                    >
                        Search
                    </Typography.Paragraph>
                    <Search
                        placeholder="input search text"
                        value={searchText}
                        onChange={handleSearch}
                    />
                </Col>
                <Col span={24}>
                    <Typography.Paragraph
                        style={{
                            fontWeight: "bold",
                            marginBottom: "3px",
                            marginTop: 10,
                        }}
                    >
                        Filter By Status
                    </Typography.Paragraph>
                    <Radio.Group>
                        <Radio value="All">All</Radio>
                        <Radio value="Completed">Completed</Radio>
                        <Radio value="Todo">Todo</Radio>
                    </Radio.Group>
                </Col>
                <Col span={24}>
                    <Typography.Paragraph
                        style={{
                            fontWeight: "bold",
                            marginBottom: "3px",
                            marginTop: 10,
                        }}
                    >
                        Filter By Priority
                    </Typography.Paragraph>
                    <Select
                        mode="multiple"
                        allowClear
                        placeholder="Please select"
                        style={{ width: "100%" }}
                    >
                        <Select.Option value="high">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="meidum">
                            <Tag color="blue">Meidum</Tag>
                        </Select.Option>
                        <Select.Option value="low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                </Col>
            </Row>
        </div>
    );
};

export default Filters;
