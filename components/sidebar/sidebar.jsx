import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ProSidebar, SidebarHeader, Menu, MenuItem, SidebarFooter } from 'react-pro-sidebar';
import { FaUsers, FaCheese, FaHome, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { RiUserStarFill } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
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
            <a>Home</a>
          </Link>
          </MenuItem>
          <MenuItem icon={<MdProductionQuantityLimits />}>
          <Link href="/expenses/expenses">
            <a>Expenses</a>
          </Link>
          </MenuItem>
          <MenuItem icon={<RiUserStarFill />}>
            <span>Suppliers</span>
          </MenuItem>
          <MenuItem icon={<FaUsers />}>
            <span>Clients</span>
          </MenuItem>
        </Menu>
        <SidebarFooter className={styles.sidebarFooter}>
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut />}>
              <span hidden={collapsed}>Logout</span>
            </MenuItem>
            <MenuItem icon={collapseIcon} onClick={() => setCollapsed(!collapsed)}>
              <span hidden={collapsed}>Hide</span>
            </MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;