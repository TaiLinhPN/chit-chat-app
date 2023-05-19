import { Form, Input } from "antd";
import { useState } from "react";
const RegisterForm = () => {

      const [user, setUser] = useState<any>({
        username: "",
        password: "",
        email: "",
        phone: "",
        userType: "photographer",
      });

      const handleInputChange = (
        event:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLSelectElement>
      ) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
      };
      const onFinish = async () => {
        try {
        } catch (error) {
          // messageError(error);
        }
      };
      const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
      };

  return (
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className={"form-login"}
    >
      <h1 className="head">Register</h1>

      <div>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please enter your name",
            },
          ]}
        >
          <Input
            placeholder="What is your name?"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </Form.Item>
      </div>

      <div>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
          ]}
        >
          <Input
            placeholder="Your email?"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </Form.Item>
      </div>

      <div>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: "Please enter your phone number",
            },
          ]}
        >
          <Input
            name="phone"
            placeholder="Phone number?"
            value={user.phone}
            onChange={handleInputChange}
          />
        </Form.Item>
      </div>

      <div>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
          ]}
        >
          <Input.Password
            className={"inputForm-password"}
            placeholder="Password?"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </Form.Item>
      </div>
      <button className={"button-login"}>Register</button>
    </Form>
  );
}

export default RegisterForm