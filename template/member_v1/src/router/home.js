//导入需要配置路由的组件
import Home from "../pages/Home/home"


//路由配置选项效果然后挂载到对应的节点即可
const HomeRoutes = [
  {
    path: "/home",
    element: <Home />,
    exact: false,
    childs:[
      {
        path: "/home/test",
        element: <div>abc</div>,
        exact: false,
      }
    ]
  }
]
export default HomeRoutes