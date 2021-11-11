import React from 'react'
import Transition from '../Static/Transition'
import { useParams } from "react-router-dom";
import { userdata } from '../DummyData/dummy';
import { Form, Input, Button,DatePicker,Row,Col,Select } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useEffect } from 'react';
import { roledata } from '../DummyData/dummy';
import moment from 'moment';


export default function UserEdit() {
    const { Option } = Select;
    const [userForm] = useForm();
    let { id } = useParams();
    const data = userdata.filter(da=>da.key==id);


    useEffect(() => {
        userForm.setFieldsValue(data[0]);
    }, [data])

    
  const onFinish = (values) => {
      // convert moment back to string
      console.log(moment(values.dob).format('YYYY/MM/DD'));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
    
    
    return (
        <React.Fragment>
        <Row>
        <Col span={4} style={{marginTop:"-80px"}}>
        <Transition></Transition>
        </Col>
        <Col span={16} style={{marginTop:"20px"}}>
        <Form 
        form={userForm}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        name="dynamic_rule">
            
            <Form.Item
                name="fname"
                label="First Name"
                rules={[
                {
                    required: true,
                    message: 'Please input your first name',
                },
                ]}
            >
                <Input placeholder="Please input your first name" />
            </Form.Item>
            <Form.Item
                name="lname"
                label="Last Name"
                rules={[
                {
                    required: true,
                    message: 'Please input your last name',
                },
                ]}
            >
                <Input placeholder="Please input your last name" />
            </Form.Item>
            <Form.Item
                name="phone"
                label="Phone"
                rules={[
                {
                    required: true,
                    message: 'Please input your phone',
                },
                ]}
            >
                <Input placeholder="Please input your phone" />
            </Form.Item>
            <Form.Item
                name="dob"
                label="D.O.B"
                rules={[
                {
                    required: true,
                    message: 'Please select your date birth',
                },
                ]}
            >
                <DatePicker />
            </Form.Item>
            <Form.Item
                name="role"
                label="Role"
                rules={[
                {
                    required: true,
                    message: 'Please select your role',
                },
                ]}
            >
                <Select
                placeholder="Select a role"
                allowClear
                >
                {roledata.map(rl =>(
                    <Option key={rl.id} value={rl.roleName}>{rl.roleName}</Option>
                ))}
                </Select>
            </Form.Item>
            <Form.Item
                name="email"
                label="Email"
                rules={[
                {
                    required: true,
                    message: 'Please input valid email!',
                    type: 'string', 
                    pattern: /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/
                },
                ]}
            >
                <Input placeholder="Please input your email" />
            </Form.Item>
            <Form.Item  wrapperCol={{ offset: 6, span: 16 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
        </Col>
        </Row>
        </React.Fragment>
    )
}