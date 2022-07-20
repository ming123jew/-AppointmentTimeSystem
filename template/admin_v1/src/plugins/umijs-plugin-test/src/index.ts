import type { IApi } from '@umijs/types';

export default (api: IApi) => {
  // TODO: https://umijs.org/plugins/api
  api.logger.info('use plugin');

  api.modifyHTML(($) => {
    $('body').prepend(`<h1>hello umi plugin</h1>`);
    return $;
  });
};
