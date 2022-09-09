import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    onSignIn = () => {
        const error =() => toast.error('Wrong')
        const sign =() => toast(<Button>
                <Link to="/home">Sign in</Link>
        </Button>
        );
        if(localStorage.setItem('username', this.state.username)===this.props.username
            &&localStorage.setItem('password', this.state.username)===this.props.username){ sign()}
        else {error() }
    };
    onFinish = (values) => {
        console.log('Success:', values);
    };
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render() {
        const initialName = 'John'
        return (
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name={"username"}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                            initialValue: initialName
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name={"password"}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={this.onSignIn}>
                        Submit
                    </Button>
                </Form.Item>
                <ToastContainer />
            </Form>
        );
    }
}
export default SignIn;