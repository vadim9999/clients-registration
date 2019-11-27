import React from 'react'
import { connect } from 'react-redux'
import { addUser, getDate } from '../../actions/index'
import { Form, Input, Select, Button,Row,Col } from 'antd'

const { Option } = Select;

const mapDispatchToProps = (dispatch: any) => {
  return {
    addUser: (user: object) => dispatch(addUser(user)),
    getDate: () => dispatch(getDate())
  }
}

const mapStateToProps = (state: { users?: object[], date?: object }) => {

  return {
    users: state.users,
    date: state.date
  }
}

interface RegistrationUserProps {
  addUser: any,
  getDate: any;
  users: object[],
  history: any;
  date: any;
}

interface RegistrationUserState {
  firstName?: string;
  lastName?: string;
  gender?: any;
  loyaltyProgram?: string,
  numberCard?: string,
  displayNumberInput?: string
}

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
}

class ConnectedRegistrationUser extends React.Component<RegistrationUserProps, RegistrationUserState>{
  constructor(props: any) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      loyaltyProgram: 'unavailable',
      numberCard: '',
      displayNumberInput: 'none'
    }
  }

  componentDidMount = () => {
    this.props.getDate()
  }
  onClick = (e: any) => {
    e.preventDefault()
    const { history } = this.props;

    console.log("click");
    const { users } = this.props;
    console.log("length", users.length);

    this.props.addUser({
      ...this.state,
      id: users.length + 1,
      date: this.props.date
    })

    history.push('/')
  }

  onChange = (e: any) => {
    console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSelectChange = (value: any) => {
    console.log("gender", value);
    if (value !== undefined) {
      this.setState({
        gender: value
      })
    }

  }

  handleSelectChangeLoyalty = (value: any) => {
    if (value !== undefined) {
      if (value === 'plasticCard') {
        this.setState({
          loyaltyProgram: 'plasticCard',
          displayNumberInput: ''
        })
      } else {
        this.setState({
          loyaltyProgram: 'unavailable',
          displayNumberInput: 'none'
        })
      }
    }
  }
  render() {
    const { date } = this.props;

    let dateItem = {
      labelCol: { span: 4 },
      wrapperCol: { span: 5 }
    }
    return (
      <div style={{ marginTop:'20px'}}>
        
        <Row type="flex" justify='center' >
          <Col span={14}>
            <Form labelCol={{ span: 10 }} wrapperCol={{ span: 24 }} onSubmit={this.onClick}>
              <Form.Item {...formItemLayout} label="First Name">
                <Input value={this.state.firstName} onChange={this.onChange} name="firstName" />
              </Form.Item>
              <Form.Item {...formItemLayout} label="Last Name">
                <Input value={this.state.lastName} onChange={this.onChange} name="lastName" />
              </Form.Item>
              <Form.Item {...formItemLayout} label="Gender">
                <Select

                  style={{ width: 200 }}
                  placeholder="Select a gender" onChange={this.handleSelectChange}>
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                </Select>
              </Form.Item>


              <Form.Item {...formItemLayout} label="Loyalty program">
                <Select
                  defaultValue='unavailable'
                  style={{ width: 200 }}
                  onChange={this.handleSelectChangeLoyalty}
                >
                  <Option value="unavailable">Unavailable</Option>
                  <Option value='plasticCard'>Plastic card</Option>

                </Select>

              </Form.Item>
              <Form.Item  {...formItemLayout} style={{ display: this.state.displayNumberInput }} label="Input number plastic card">
                <Input name="numberCard" onChange={this.onChange}></Input>
              </Form.Item>

              <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                <Button type="primary" htmlType="submit">
                  Submit
          </Button>
              </Form.Item>
              <Form.Item  labelCol={{span:4}} wrapperCol={{span:8}} label="Date" >

                <span>{date != undefined ? (date.slice(0,50)) : ''}</span>
              </Form.Item>

            </Form>
          </Col>
        </Row>


      </div>

    )
  }
}

const RegistrationUser = connect(mapStateToProps, mapDispatchToProps)(ConnectedRegistrationUser)
export default RegistrationUser