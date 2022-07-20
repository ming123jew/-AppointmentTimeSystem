import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/pages/Member/store/";

const LoginForm = () => {
    const navigate = useNavigate();
    const { loginStore } = useStore();

    const onFinish = async (values) => {
        const { username, password } = values;
        console.log("Received values of form: ", values);

        try {
            await loginStore.login({ username, password });
            navigate("/member/");
            message.success("登录成功");
        } catch (error) {
            message.error("登录失败", error);
        }
    };

    return (
        <div className="login-div">
            <div className="login-form-title">
                <h3>{import.meta.env.VITE_APP_TITLE}</h3>
            </div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Username!",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="/forgot">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Log in
                    </Button>
                    Or <a href="/register">register now!</a>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;
