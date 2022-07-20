import React from "react"
import CollectRuleStore from './collectRule.Store'

class RootStore {
  collectRuleStore: CollectRuleStore
  // 组合模块
  constructor() {
    this.collectRuleStore = new CollectRuleStore()
  }
}
// 导入useStore方法供组件使用数据
const StoresContext = React.createContext(new RootStore())
export const useStore = () => React.useContext(StoresContext)