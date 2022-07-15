import { Layout, Menu } from "antd";
import React, { useState } from "react";
const { Header, Footer, Sider, Content } = Layout;
import { Link, matchRoutes, Outlet, useLocation } from "react-router-dom";
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { env_config } from "@/utils";

import "./member.css";

const MemberHeader = () => {
    const items = [
        {
            label: "Navigation One",
            key: "mail",
            icon: <MailOutlined />,
        },
        {
            label: "Navigation Two",
            key: "app",
            icon: <AppstoreOutlined />,
            disabled: true,
        },
        {
            label: "Navigation Three - Submenu",
            key: "SubMenu",
            icon: <SettingOutlined />,
            children: [
                {
                    type: "group",
                    label: "Item 1",
                    children: [
                        {
                            label: "Option 1",
                            key: "setting:1",
                        },
                        {
                            label: "Option 2",
                            key: "setting:2",
                        },
                    ],
                },
                {
                    type: "group",
                    label: "Item 2",
                    children: [
                        {
                            label: "Option 3",
                            key: "setting:3",
                        },
                        {
                            label: "Option 4",
                            key: "setting:4",
                        },
                    ],
                },
            ],
        },
        {
            label: (
                <a
                    href="https://ant.design"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Navigation Four - Link
                </a>
            ),
            key: "alipay",
        },
    ];

    const [current, setCurrent] = useState("mail");

    const onClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    );
};

const MemberFooter = () => {
    return (
        <>
            <div className="member-footer">
                <div className="member-footer-main">
                    <span className="title">
                        {import.meta.env.VITE_APP_TITLE}
                    </span>
                    <span className="icp">
                        <a rel="nofollow" href="http://beian.miit.gov.cn/">
                            {import.meta.env.VITE_APP_ICP}
                        </a>
                    </span>
                </div>
            </div>
        </>
    );
};

const MemberLayout = () => {
    return (
        <Layout>
            <Header>
                <div className="member-header">
                    <MemberHeader />
                </div>
            </Header>
            <Content>
                <Outlet />
            </Content>
            <Footer>
                <MemberFooter />
            </Footer>
        </Layout>
    );
};

export default MemberLayout;
