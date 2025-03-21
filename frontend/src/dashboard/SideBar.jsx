import { useState, useContext } from "react";
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiOutlineCloudUpload, HiTable, HiHome, HiMenu } from "react-icons/hi";
import { AuthContext } from "../context/AuthProvider";

export const SideBar = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar - Fully Hides When Closed */}
      <div 
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 ${
          isOpen ? "w-64 opacity-100 visible" : "w-0 opacity-0 invisible"
        }`}
      >
        <Sidebar aria-label="Sidebar with content separator example" className="h-full bg-gray-900 text-white">
          {/* Sidebar Header - Profile & Close Button */}
          <div className="flex items-center justify-between px-6 pt-6">
            <Sidebar.Logo 
              href="#" 
              img={user?.photoURL} 
              imgAlt="User Profile" 
              theme={{ img: "w-12 h-12 rounded-full" }} 
              className="flex gap-3"
            >
              <span className="text-xl font-semibold">
                {user?.displayName 
                  ? user.displayName.length > 15 
                    ? user.displayName.slice(0, 15) + "..."
                    : user.displayName
                  : "Demo User"}
              </span>
            </Sidebar.Logo>

            {/* Close (✖) Button - Near Menu */}
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition"
            >
              ✖
            </button>
          </div>

          {/* Sidebar Items */}
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="text-white hover:text-gray-300">
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} className="text-white hover:text-gray-300">
                Upload Book
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} className="text-white hover:text-gray-300">
                Manage Books
              </Sidebar.Item>
              <Sidebar.Item href="/logout" icon={HiTable} className="text-white hover:text-gray-300">
                Log Out
              </Sidebar.Item>
              <Sidebar.Item href="/" icon={HiHome} className="text-blue-400 hover:text-blue-600">
                Home
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

      {/* Main Content - Shifts Right When Sidebar Opens */}
      <div className={`flex-1 transition-all duration-300 ${isOpen ? "ml-64" : "ml-0"} p-6`}>
        {/* Toggle (☰) Button - Always Visible */}
        {!isOpen && (
          <button 
            onClick={() => setIsOpen(true)} 
            className="fixed top-5 left-5 bg-gray-800 text-white p-3 rounded-full z-50 transition-all duration-300"
          >
            <HiMenu size={28} />
          </button>
        )}

        {children}
      </div>
    </div>
  );
};

export default SideBar;
