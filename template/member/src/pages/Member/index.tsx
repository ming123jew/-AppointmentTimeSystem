import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import LoginForm from "./components/LoginForm";

class Member extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.Type) {
            case "login":
                return <LoginForm />;

            case "member":
                break;

            default:
                return <div className="member-index">Member Index</div>;
        }
    }
}

export default Member;
