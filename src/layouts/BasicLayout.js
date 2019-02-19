import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import SiderMenu from '@/components/SiderMenu';
import memoizeOne from 'memoize-one';
@connect(({ setting, routes }) => ({
  themeColor: setting.themeColor,
}))
class BasicLayout extends React.PureComponent {
  constructor(porps) {
    this.getDocumentTitle = memoizeOne(this.getDocumentTitle);
    this.getBreadcrumbMap = memoizeOne(this.getBreadcrumbMap);
    this.breadcrumb = this.getBreadcrumbMap();
  }
  state = {
    menuData: [],
  };
  getDocumentTitle = pathname => {
    return pathname;
  };
  getBreadcrumbMap = () => {
    const { route: routes } = this.props;
    console.log(routes);
  };
  render() {
    const {
      children,
      themeColor,
      location: { pathname },
    } = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        <DocumentTitle title={this.getDocumentTitle(pathname)}>{children}</DocumentTitle>
      </React.Fragment>
    );
  }
}

export default BasicLayout;
