import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer container className="bg-gray-800 text-white">
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-gray-300 hover:text-white">About</Footer.Link>
              <Footer.Link href="#" className="text-gray-300 hover:text-white">Careers</Footer.Link>
              <Footer.Link href="#" className="text-gray-300 hover:text-white">Brand Center</Footer.Link>
              <Footer.Link href="#" className="text-gray-300 hover:text-white">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Help Center" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-gray-300 hover:text-white">Discord Server</Footer.Link>
              <Footer.Link href="#" className="text-gray-300 hover:text-white">Twitter</Footer.Link>
              <Footer.Link href="#" className="text-gray-300 hover:text-white">Facebook</Footer.Link>
              <Footer.Link href="#" className="text-gray-300 hover:text-white">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-gray-300 hover:text-white">Privacy Policy</Footer.Link>
              <Footer.Link href="#" className="text-gray-300 hover:text-white">Licensing</Footer.Link>
              <Footer.Link href="#" className="text-gray-300 hover:text-white">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Download" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-gray-300 hover:text-white">iOS</Footer.Link>
              <Footer.Link href="#" className="text-gray-300 hover:text-white">Android</Footer.Link>
              <Footer.Link href="#" className="text-gray-300 hover:text-white">Windows</Footer.Link>
              <Footer.Link href="#" className="text-gray-300 hover:text-white">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-900 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2025} className="text-gray-400" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-gray-400 hover:text-white" />
            <Footer.Icon href="#" icon={BsInstagram} className="text-gray-400 hover:text-white" />
            <Footer.Icon href="#" icon={BsTwitter} className="text-gray-400 hover:text-white" />
            <Footer.Icon href="#" icon={BsGithub} className="text-gray-400 hover:text-white" />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
