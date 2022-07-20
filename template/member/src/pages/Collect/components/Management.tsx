import { Table, Divider } from "antd";
import { useStore } from "@/pages/Collect/store/";
import { ManagementSearchForm } from "@/pages/Collect/components";

const Management = () => {
    const { collectRuleStore } = useStore();

    return (
        <div className="collect-main">
            <div className="collect-main-header">
                <ManagementSearchForm />
            </div>
            <Divider />
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
    );
};

export default Management;
