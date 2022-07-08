// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import './core/polyfill';
import 'antd/dist/antd.less';
import { renderClient } from '/home/zk018/work/www/pyapps/github/AppointmentTimeSystem/template/node_modules/@umijs/renderer-react';
import { getRoutes } from './core/route';
import { createPluginManager } from './core/plugin';
import { createHistory } from './core/history';
import { ApplyPluginsType } from 'umi';


const publicPath = "/";
const runtimePublicPath = false;

async function render() {
  const pluginManager = createPluginManager();
  const { routes, routeComponents } = await getRoutes(pluginManager);

  // allow user to extend routes
  await pluginManager.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: {
      routes,
      routeComponents,
    },
  });

  return (pluginManager.applyPlugins({
    key: 'render',
    type: ApplyPluginsType.compose,
    initialValue() {
      const contextOpts = pluginManager.applyPlugins({
        key: 'modifyContextOpts',
        type: ApplyPluginsType.modify,
        initialValue: {},
      });
      const basename = contextOpts.basename || '/';
      const context = {
        routes,
        routeComponents,
        pluginManager,
        rootElement: contextOpts.rootElement || document.getElementById('root'),
        publicPath,
        runtimePublicPath,
        history: createHistory({
          type: 'browser',
          basename,
        }),
        basename,
      };
      return renderClient(context);
    },
  }))();
}


render();
