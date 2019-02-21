import React from 'react';
import styles from './index.less';
import Link from 'umi/link';

class Index extends React.PureComponent {
  generateSiderMenu = () => {
    const { siderMenu } = this.props;
    return siderMenu.map(menuItem => {
      return (
        <li key={menuItem.path}>
          <Link to={menuItem.path}>{menuItem.name}</Link>
        </li>
      );
    });
  };
  render() {
    return (
      <div className={styles.siderContainer}>
        <div className={styles.siderTop}>123</div>
        <div className={styles.menuContainer}>
          <ul>{this.generateSiderMenu()}</ul>
        </div>
      </div>
    );
  }
}

export default Index;
