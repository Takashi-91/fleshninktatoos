import { FaInstagram, FaFacebook } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      
      <div className="mx-auto w-full max-w-screen-xl font-bold p-4 py-6 lg:py-8 ">
        <div className="md:flex md:justify-between">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <a href="https://example.com" className="flex items-center ml-10">
              <div className="relative h-14 w-14 bg-[url('/imgs/logo-3.png')] bg-cover bg-center inset-0 rounded-full border-2 bg-white"
              />
            </a>
            <p className="mt-4 text-lg text-white ">
            Flesh-n-Ink<span className="text-green-600"> Tattoo Studio</span>
        </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-white dark:text-white font-medium">
                <li className="mb-4 flex items-center space-x-2">
                  <FaInstagram className="text-xl text-pink-500" />
                  <a href="https://www.instagram.com/fleshninktattoos/" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaFacebook className="text-xl text-blue-600" />
                  <a href="https://www.facebook.com/fleshninktattoos/" className="hover:underline">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-white dark:text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />

        {/* Footer Bottom Section */}
        <div className="sm:flex sm:items-center sm:justify-between text-white">
          <span className="text-sm text-white sm:text-center dark:text-white">
            © {currentYear}{' '}
            <a href="https://example.com" className="hover:underline text-white">
              Flesh-n-Ink<span className="text-green-600"> Tattoo Studio</span>™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
