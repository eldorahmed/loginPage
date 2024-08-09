import React from "react";

import { Button, Checkbox, Form, Grid, Input, theme, Typography } from "antd";
import { Link } from "react-router-dom";

import {
  LockOutlined,
  MailOutlined,
  UserOutlined,
  FileImageOutlined,
} from "@ant-design/icons";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title } = Typography;

import { useRegister } from "../hooks/useRegister";
import { useLogin } from "../hooks/useLogin";

export default function Register() {
  const { registerWithEmailAndPassword } = useRegister();
  const { registerWithGoogle, isPending } = useLogin();
  const { token } = useToken();
  const screens = useBreakpoint();

  const onFinish = (values) => {
    registerWithEmailAndPassword(values);
  };

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.sizeXXL}px ${token.padding}px`,
      width: "380px",
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%",
    },
    forgotPassword: {
      float: "right",
    },
    header: {
      display: "flex",
      justifyContent: "center",
      width: "full",
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "100vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px",
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  return (
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <div style={styles.container}>
        <div style={styles.header}>
          <Title style={styles.title}>Register</Title>
        </div>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="displayName"
            rules={[
              {
                type: "text",
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="photoURL"
            rules={[
              {
                type: "url",
                required: true,
                message: "Please input your PhotoURL!",
              },
            ]}
          >
            <Input prefix={<FileImageOutlined />} placeholder="PhotoURL" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
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
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a style={styles.forgotPassword} href="">
              Forgot password?
            </a>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            {isPending && (
              <Button
                style={{ marginBottom: "5px" }}
                block="true"
                type="primary"
                shape="round"
                htmlType="submit"
                disabled={true}
              >
                Register
              </Button>
            )}
            {!isPending && (
              <Button
                style={{ marginBottom: "5px" }}
                block="true"
                type="primary"
                shape="round"
                htmlType="submit"
              >
                Register
              </Button>
            )}
            {isPending && (
              <Button
                style={{ fontWeight: "bold", letterSpacing: "2px" }}
                block="true"
                shape="round"
                type="default"
                htmlType="button"
                disabled={true}
              >
                Loading...
              </Button>
            )}
            {!isPending && (
              <Button
                style={{ fontWeight: "bold", letterSpacing: "2px" }}
                block="true"
                shape="round"
                type="default"
                htmlType="button"
                onClick={registerWithGoogle}
              >
                Google
              </Button>
            )}
            <div style={styles.footer}>
              <Text style={styles.text}>Don't have an account?</Text>{" "}
              <Link to="/login">Login</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
