// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import * as Plugin_0 from '/home/zk018/work/www/pyapps/github/AppointmentTimeSystem/template/admin/src/app.ts';
import { PluginManager } from 'umi';

export function getPlugins() {
  return [
    {
      apply: Plugin_0,
      path: process.env.NODE_ENV === 'production' ? void 0 : '/home/zk018/work/www/pyapps/github/AppointmentTimeSystem/template/admin/src/app.ts',
    },
  ];
}

export function getValidKeys() {
  return ['patchRoutes','patchClientRoutes','modifyContextOpts','rootContainer','innerProvider','i18nProvider','accessProvider','dataflowProvider','outerProvider','render','onRouteChange','qiankun',];
}

let pluginManager = null;
export function createPluginManager() {
  pluginManager = PluginManager.create({
    plugins: getPlugins(),
    validKeys: getValidKeys(),
  });
  return pluginManager;
}

export function getPluginManager() {
  return pluginManager;
}
