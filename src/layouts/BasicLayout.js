import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import SiderMenu from '@/components/SiderMenu';
import memoizeOne from 'memoize-one';
import Media from 'react-media';
class BasicLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.getDocumentTitle = memoizeOne(this.getDocumentTitle);
  }

  componentDidMount() {
    const {
      dispatch,
      route: { routes },
    } = this.props;
    dispatch({
      type: 'app/setSiderMenu',
      payload: routes,
    });
  }
  getDocumentTitle = pathname => {
    return pathname;
  };

  render() {
    const {
      children,
      location: { pathname },
      isMobile,
    } = this.props;
    return (
      <React.Fragment>
        <DocumentTitle title={this.getDocumentTitle(pathname)}>
          <div className={styles.sjContainer}>
            {isMobile ? null : (
              <div className={styles.siderMenu}>
                <SiderMenu {...this.props} />
              </div>
            )}
            <div className={styles.content}>{children}</div>
          </div>
        </DocumentTitle>
      </React.Fragment>
    );
  }
}
export default connect(({ setting, app }) => ({
  themeColor: setting.themeColor,
  siderMenu: app.siderMenu,
}))(props => (
  <Media query="(max-width: 599px)">
    {isMobile => <BasicLayout {...props} isMobile={isMobile} />}
  </Media>
));
