import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import SignIn from "./SignIn";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: [
                {
                    key: '5',
                    name: 'Tung',
                    account: 'abc1',
                    age: 32,
                    sex: 'men',
                    address: 'Ha Noi',
                },],
            data: [
                {
                    key: '1',
                    name: 'Tu',
                    account: 'abc1',
                    age: 32,
                    sex: 'men',
                    address: 'Ha Noi',
                },
                {
                    key: '2',
                    name: 'Tam',
                    account: 'abc2',
                    age: 28,
                    sex: 'women',
                    address: 'Hai Duong',
                },
                {
                    key: '3',
                    name: 'Tuong',
                    account: 'abc3',
                    age: 25,
                    sex: 'men',
                    address: 'HCM',
                },
                {
                    key: '4',
                    name: 'Hieu',
                    account: 'abc4',
                    age: 30,
                    sex: 'men',
                    address: 'Da Nang',
                },
                //{this.props.a}
            ],
            columns: [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    // specify the condition of filtering result
                    // here is that finding the name started with `value`
                    onFilter: (value, record) => record.name.indexOf(value) === 0,
                    sorter: (a, b) => a.name.length - b.name.length,
                    sortDirections: ['descend'],
                },
                {
                    title: 'Sex',
                    dataIndex: 'sex',
                    filters: [
                        {
                            text: 'men',
                            value: 'men',
                        },
                        {
                            text: 'women',
                            value: 'women',
                        }
                    ],
                    onFilter: (value, record) => record.sex.indexOf(value) === 0,
                },
                {
                    title: 'Age',
                    dataIndex: 'age',
                    defaultSortOrder: 'descend',
                    sorter: (a, b) => a.age - b.age,
                },
                {
                    title: 'Address',
                    dataIndex: 'address',
                    filters: [
                        {
                            text: 'Ha Noi',
                            value: 'Ha Noi',
                        },
                        {
                            text: 'HCM',
                            value: 'HCM',
                        },
                        {
                            text: 'Hai Duong',
                            value: 'Hai Duong',
                        },
                        {
                            text: 'Da Nang',
                            value: 'Da Nang',
                        },
                    ],
                    onFilter: (value, record) => record.address.indexOf(value) === 0,
                },
                {
                    title: 'Account',
                    dataIndex: 'account',

                },
            ]
        }
    }
    render() {
        const result=this.state.data.concat(this.state.data1) ;
        const onChange = (pagination, filters, sorter, extra) => {
            console.log('params', pagination, filters, sorter, extra);}
        return (
            <div>
                <SignIn username={this.state.data.account}
                password={this.state.data.account}/>
                <Table columns={this.state.columns} dataSource={result} onChange={onChange}/>
            </div>
        );
    }
}
export default Home;
