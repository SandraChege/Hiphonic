import "./LeftContent.scss"
import ShortCuts from "../components/ShortCuts";
import Groups from "../components/Groups";
import Contacts from "../components/Contacts";

function LeftContent() {
  return (
    <div className="leftContent">
      <div className="sidebar-shortCuts"><ShortCuts /></div>
      <div className="SideProfile"><Contacts/></div>
      <div className="sidenav-menu"><Groups /></div>
    </div>
  );
}
export default LeftContent