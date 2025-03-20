import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import userImg from "../assets/profile.jpg"
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";


export const SideBar = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className="h-full">
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo 
          href="#" 
          img={user?.photoURL} 
          imgAlt="Flowbite logo" 
          theme={{ img: "w-11 h-11 rounded-full" }} 
          className="flex gap-2 pt-3 mb-4"
        >
          <span className="text-xl font-semibold"> 
          <p>
            {user?.displayName 
              ? user.displayName.length > 15 
                ? user.displayName.slice(0, 15) + "..."
                : user.displayName
              : "Demo User"}
          </p>

            </span>
        </Sidebar.Logo>


        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
              Upload Book
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
              Manage Books
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiTable}>
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
