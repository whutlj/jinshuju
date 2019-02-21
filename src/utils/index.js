/**
 *
 * @param {路由配置文件routes} routes
 */
export const formatMenu = routes => {
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
