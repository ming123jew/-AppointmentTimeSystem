//导入需要配置路由的组件
import Member from "../pages/Member/index"

//路由配置选项效果然后挂载到对应的节点即可
const MemberRoutes = [
  {
    path: "/member",
    element: <Member />,
    exact: false,
  }
]
export default MemberRoutes