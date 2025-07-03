
import {
  FaTasks,
  FaSignOutAlt,
  FaCog,
  FaUsers,
} from "react-icons/fa";
import {FC} from "react";

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
}


const SidebarLink: FC<SidebarLinkProps> = ({ icon, label }) => (
  <div className="flex items-center text-gray-700 hover:text-black space-x-3 cursor-pointer">
    <span className="text-lg">{icon}</span>

    <span className="text-md font-medium">{label}</span>
  </div>
);
const Sidebar: FC = () => (
  <aside className="w-64 bg-black text-white p-6 border-r ">
     <div className="items-center mr-20 h-14 w-14 bg-[url('/imgs/logo-3.png')] bg-cover bg-center rounded-full border-2 bg-white"/>
    <div className="flex items-center justify-center mb-6">
    <h2 className=" deadwood-font text-2xl font-bold mb-8"> Flesh-n-Ink<span className="text-green-600"> Tattoo Studio</span></h2>
    </div>
    <nav className="space-y-4">
      <SidebarLink icon={<FaTasks />} label="Dashboard" />
      <br />
      <SidebarLink icon={<FaUsers />} label="Team" />
      <br/>
      <SidebarLink icon={< FaCog/>} label="Settings" />
      <br />
      <div className="absloute bottom-auto">
      <SidebarLink icon={< FaSignOutAlt/>} label="Logout" />
      </div>
    </nav>
  </aside>
);
export default Sidebar;