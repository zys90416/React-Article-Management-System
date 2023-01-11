
import { Card, Form, Input, Button, Checkbox, message } from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'
import { useStore } from '@/store' 
import {useNavigate} from 'react-router-dom'


function Login(){
    const {loginStore} = useStore()
    const navigate = useNavigate()
   async function onFinish(values) {
        console.log(values)
        //values 放置了所有表单项中用户输入的东西
        //todo 登陆
       await loginStore.getToken({
            mobile: values.username,
            code: values.password
        })

        //跳转首页
        navigate('/')
        // 提示用户登陆成功
        message.success('login success')


    }
    function onFinishFailed(errorInfo){
        console.log(errorInfo)
    }
    return(
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt="" />
                {/* 登录表单 */}
                <Form validateTrigger={['onBlur', 'onChange']}
                    initialValues={{
                        remember: true
                    }}
                    onFinish = {onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your username!',
                          },
                          {
                            pattern: /^1[3-9]\d{9}$/,
                            message: 'please input correct number',
                            validateTrigger: 'onBlur'
                          }
                        ]}
                    >
                        <Input size="large" placeholder="请输入手机号 phone number" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your password!',
                          },
                          {
                            len: 6,
                            message: 'please input 6 digital numbers',
                            validateTrigger: 'onBlur'
                          }
                        ]}
                    >
                        <Input size="large" placeholder="请输入验证码 code" />
                    </Form.Item>
                    <Form.Item
                        name="remember"
                        valuePropName='checked'
                    >
                        <Checkbox className="login-checkbox-label">
                        我已阅读并同意「用户协议」和「隐私条款」 Agreements
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                        登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}
export default Login