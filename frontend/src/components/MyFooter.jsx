import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer container className="bg-gray-800 text-white">
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Home" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="/" className="text-gray-300 hover:text-white">Home</Footer.Link>
              <Footer.Link href="/about" className="text-gray-300 hover:text-white">About</Footer.Link>
              <Footer.Link href="/blog" className="text-gray-300 hover:text-white">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Help Center" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Footer.Link>
              <Footer.Link href="https://twitter.com/JadeDavidJ94432" className="text-gray-300 hover:text-white">Twitter</Footer.Link>
              <Footer.Link href="https://web.facebook.com/profile.php?id=100076199182042" className="text-gray-300 hover:text-white">Facebook</Footer.Link>
              <Footer.Link href="https://github.com/codedjade003" className="text-gray-300 hover:text-white">GitHub</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Footer.Link>
              <Footer.Link href="/licensing" className="text-gray-300 hover:text-white">Licensing</Footer.Link>
              <Footer.Link href="/terms" className="text-gray-300 hover:text-white">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Download" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="/download/ios" className="text-gray-300 hover:text-white">iOS</Footer.Link>
              <Footer.Link href="/download/android" className="text-gray-300 hover:text-white">Android</Footer.Link>
              <Footer.Link href="/download/windows" className="text-gray-300 hover:text-white">Windows</Footer.Link>
              <Footer.Link href="/download/macos" className="text-gray-300 hover:text-white">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-900 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2025} className="text-gray-400" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://web.facebook.com/profile.php?id=100076199182042" icon={BsFacebook} className="text-gray-400 hover:text-white" />
            <Footer.Icon href="https://www.instagram.com/edaj_ma_i" icon={BsInstagram} className="text-gray-400 hover:text-white" />
            <Footer.Icon href="https://twitter.com/JadeDavidJ94432" icon={BsTwitter} className="text-gray-400 hover:text-white" />
            <Footer.Icon href="https://github.com/codedjade003" icon={BsGithub} className="text-gray-400 hover:text-white" />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
