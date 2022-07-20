import '../styles/sidebar.css';
import { Link } from 'react-router-dom';

import { ImTwitter } from 'react-icons/im';
import { GoHome } from 'react-icons/go';
import { FaHashtag } from 'react-icons/fa';
import { MdNotificationsNone } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { BsBookmark } from 'react-icons/bs';
import { RiFileListLine } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { CgMoreO } from 'react-icons/cg';
import { MdMoreHoriz } from 'react-icons/md';
import SidebarNav from './SidebarNav';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ImTwitter className="sidebar__logo" />
      <div className="sidebar__navs">
        <Link to="/" className="links">
          <SidebarNav Icon={GoHome} text="Home" />
        </Link>
        <SidebarNav Icon={FaHashtag} text="Explore" />
        <SidebarNav Icon={MdNotificationsNone} text="Notification" />
        <SidebarNav Icon={FiMail} text="Messages" />
        <SidebarNav Icon={BsBookmark} text="Bookmarks" />
        <SidebarNav Icon={RiFileListLine} text="FIles" />
        <Link to="/profile" className="links">
          <SidebarNav Icon={BsFillPersonFill} text="Profile" />
        </Link>
        <SidebarNav Icon={CgMoreO} text="More" />
      </div>
      <button className="sidebar__tweetBtn">Tweet</button>
      <div className="sidebar__user">
        <div className="sidebarUser__profile">
          <img
            src="https://pbs.twimg.com/profile_images/1528624295479595010/SwapSZK9_400x400.jpg"
            alt="profile pic"
          />
          <div className="sidebarUser__name">
            <p className="username">Tayor♾♾</p>
            <p className="name">@tayor_official</p>
          </div>
        </div>
        <MdMoreHoriz />
      </div>
    </div>
  );
};

export default Sidebar;
