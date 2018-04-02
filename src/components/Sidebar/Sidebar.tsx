import * as React from 'react'
import * as cx from 'classnames'
import { Link } from 'react-router-dom'

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => (
  <div className={cx( className, 'pa3 mr3 ba')}>
    <Link to="/todos">Todos</Link>
    <br/>
    <Link to="/forms">Forms</Link>
  </div>
)

export default Sidebar;