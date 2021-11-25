import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ProSidebar, SidebarHeader, Menu, MenuItem, SidebarFooter } from 'react-pro-sidebar';
import { FaUsers, FaCheese, FaHome, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { RiUserStarFill } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import i18n from '../../i18n';
import 'react-pro-sidebar/dist/css/styles.css';
import styles from './sidebar.module.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [collapseIcon, setCollapseIcon] = useState(<FaArrowLeft />);

  useEffect(() => {
    collapsed ? setCollapseIcon(<FaArrowRight />) : setCollapseIcon(<FaArrowLeft />);
  }, [collapsed]);

  return (
    <div className={styles.sidebarContainer}>
      <ProSidebar collapsed={collapsed}>
        <SidebarHeader className={styles.title}>
          <h4>
            <span className="me-2" hidden={collapsed}>
              Cheese-Company
            </span>
            <FaCheese />
          </h4>
        </SidebarHeader>
        <Menu iconShape="square">
          <MenuItem icon={<FaHome />}>
          <Link href="/" >
            <a>{i18n.t('home')}</a>
          </Link>
          </MenuItem>
          <MenuItem icon={<MdProductionQuantityLimits />}>
          <Link href="/expenses/expenses">
            <a>{i18n.t('expenses')}</a>
          </Link>
          </MenuItem>
          <MenuItem icon={<RiUserStarFill />}>
            <span>{i18n.t('suppliers')}</span>
          </MenuItem>
          <MenuItem icon={<FaUsers />}>
            <span>{i18n.t('clients')}</span>
          </MenuItem>
        </Menu>
        <SidebarFooter className={styles.sidebarFooter}>
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut />}>
              <span hidden={collapsed}>{i18n.t('logout')}</span>
            </MenuItem>
            <MenuItem icon={collapseIcon} onClick={() => setCollapsed(!collapsed)}>
              <span hidden={collapsed}>{i18n.t('hide')}</span>
            </MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;