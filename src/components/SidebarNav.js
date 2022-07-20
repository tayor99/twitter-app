import '../styles/sidebarnav.css';

const SidebarNav = ({ Icon, text }) => {
  return (
    <div className="sidebarNav">
      <div className="sidebarNav__details">
        <Icon className="sidebarNav__icons" />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SidebarNav;
