import { Form, Input, Button, Row, Col, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom"
import { AuthConsumer } from '../../utils/Auth';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie'
import '../../static/css/Login.css';
import axios from 'axios';


const Login = ()=>{
    const navigate = useNavigate()
    const { authed, login } = AuthConsumer()
    const [cookies, setCookie] = useCookies(['token'])
    useEffect(()=>{
        if(cookies.token){
            login()
        }
        if(authed && cookies.token){
            message.warning('请勿重复登录！', 1 , navigate('/index'))
        }
    },[authed])

    const onFinish = (values) => {
        const userInfo = {...values};
        axios.post('/api/login',userInfo).then(res => {
            const { data } = res;
            if(data.code === '00001'){
                login()
                setCookie('token', data.token, {
                    path: '/',
                })
                message.success(data.msg,1,navigate('/index'))
            }else{
                message.error('登录失败！用户名或密码错误', 1)
            }
        })
    };
    return (
        <Form
        name="login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        >
            <Row align='middle' >
                <Col span={6} push={8} className='form-wrapper'>
                    <Row justify='center' className='login-title' style={{margin: '20px 0'}} >
                        后台管理系统登录
                    </Row>
                    <Row justify='center'>
                        <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input 
                            prefix={<UserOutlined className="site-form-item-icon" />} 
                            placeholder="用户名"
                            size='large' 
                            />
                        </Form.Item>
                    </Row>
                    <Row justify='center'>
                        <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                                size='large'
                            />
                        </Form.Item>
                    </Row>
                    <Row justify='center'>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" size='large'>
                                登录
                            </Button>
                        </Form.Item>
                    </Row>
                </Col>
            </Row>
        </Form>

    );
}

export default Login