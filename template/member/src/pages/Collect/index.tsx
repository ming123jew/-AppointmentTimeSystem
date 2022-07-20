import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import Management from "./components"

class Collect extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.Type) {
            case "management"://来源管理
                return <Management />;

            case "config"://来源配置
                break;

            case "template"://规则模板
                break;

            case "monitor"://采集监控
                break; 

            case "impurity/rule"://规则管理
                break; 

            case "interim"://外采临时库
                break; 

            default:
                return <div className="collect-index">Member Index</div>;
        }
    }
}

export default Collect;
