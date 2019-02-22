import React from 'react';
import styles from './index.less';
import Link from 'umi/link';
import classNames from 'classnames';
import pathToRegexp from 'path-to-regexp';
class Index extends React.PureComponent {
  generateSiderMenu = () => {
    const {
      siderMenu,
      location: { pathname },
    } = this.props;
    return siderMenu.map(menuItem => {
      const imgSrc = require(`@/icons/${menuItem.icon}.png`);
      const selected = {
        [styles.selected]: pathToRegexp(menuItem.path).test(pathname),
      };
      return (
        <li key={menuItem.path}>
          <Link to={menuItem.path} className={classNames(styles.liItem, selected)}>
            <img src={imgSrc} alt="" className={styles.menuIcon} />
            {menuItem.name}
          </Link>
        </li>
      );
    });
  };
  render() {
    const { themeColor } = this.props;
    return (
      <div className={styles.siderContainer} style={{ backgroundColor: themeColor }}>
        <div className={styles.siderTop}>
          <div className={styles.avatar} />
          <div className={styles.user}>
            <div>Welcome</div>
            <div>Ramkumar K</div>
            <div>Student</div>
          </div>
        </div>
        <div className={styles.menuContainer}>
          <ul>{this.generateSiderMenu()}</ul>
        </div>
      </div>
    );
  }
}

export default Index;
