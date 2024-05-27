import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-400 overflow-hidden " id="footer">
      <div className="border border-white w-screen"> </div>
      <div className="grid grid-cols-3 justify-items-center pt-7 gap-x-4 ">
        <ul className="flex flex-col w-32 text-white">
          <h2 className="text-xl font-bold ">Discover</h2>
          <li>Land For Sale</li>
          <li> Flat For Rent</li>
          <li>House For Rent</li>
        </ul>
        <ul className="flex flex-col text-white w-32">
          <h2 className="text-xl font-bold">Support</h2>
          <li>Help Center</li>
          <li> Our Rules</li>
          <li>Creator</li>
          <li>Resources</li>
          <li>Forward Funds</li>
        </ul>
        <ul className="flex flex-col text-white w-32">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <li>9777777777 </li>
          <li> nepalgharjagga@gmail.com</li>
        </ul>
      </div>
      <div className=" pt-10 mx-auto flex flex-col  justify-center gap-10 items-center">
        <ul className="flex gap-8 ">
          <li>
            <a
              href="https://www.instagram.com/your_instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <i className="fab fa-instagram text-3xl"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/your_facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <i className="fab fa-facebook text-3xl"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/your_linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <i className="fab fa-linkedin text-3xl"></i>
            </a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
        <ul className="text-white flex flex-col text-xl gap-4">
          {/* <li>
            <i className="fas fa-envelope "></i> info@example.com
          </li>
          <li>
            <i className="fas fa-phone"></i> +1 234 567 890
          </li> */}
          {/* Add more contact information as needed */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
