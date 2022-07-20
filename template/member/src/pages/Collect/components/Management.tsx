
import React from "react";
import "antd/dist/antd.css";

import { Table } from 'antd';


import { useStore } from "@/pages/Collect/store/";


const Management = () => {
    
    
    const {collectRuleStore} = useStore();


    return (
        <div className="collect-main">
            <div className="collect-main-header">

            </div>

            <div className="collect-main-body">

            <Table
                columns={collectRuleStore.columns}
                dataSource={collectRuleStore.data}
                scroll={{
                x: 1300,
                }}
            />
            </div>
        </div>
    )

}

export default Management;

