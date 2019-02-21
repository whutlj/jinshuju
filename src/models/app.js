import memoizeOne from 'memoize-one';
import isEqual from 'lodash/isEqual';
import pathToRegexp from 'path-to-regexp';
/**
 *
 * @param {路由配置文件routes} 用于根据路由配置文件生成左侧导航栏
 */
const formatMenu = routes => {
  return routes
    .map(route => {
      if (!route.name || !route.path) {
        return null;
      }
      const result = {
        ...route,
      };
      if (route.routes && !route.hideChildrenInMenu) {
        const children = formatMenu(route.routes);
        if (children && children.length > 0) {
          result.children = children;
        }
      }
      delete result.routes;
      return result;
    })
    .filter(item => item);
};

const getBreadcrumb = siderMenu => {
  let breadcrumb = {};
  const handleSiderMemu = data => {
    data.forEach(menuItem => {
      if (menuItem.children) {
        handleSiderMemu(menuItem.children);
      }
      breadcrumb[menuItem.path] = menuItem;
    });
  };
  handleSiderMemu(siderMenu);
  return breadcrumb;
};
const memoizeOneFormatMenu = memoizeOne(formatMenu, isEqual);
const memoizeOneGetBreadcrumb = memoizeOne(getBreadcrumb, isEqual);
export default {
  namespace: 'app',
  state: {
    siderMenu: [],
    breadcrumb: {},
  },
  reducers: {
    setSiderMenu(state, { payload }) {
      const siderMenu = memoizeOneFormatMenu(payload);
      const breadcrumb = memoizeOneGetBreadcrumb(siderMenu);
      return {
        ...state,
        siderMenu,
        breadcrumb,
      };
    },
  },
};
