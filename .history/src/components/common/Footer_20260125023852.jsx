import React from "react";
import { twMerge } from "tailwind-merge";
import Logo from "../ui/Logo";
import Link from "../ui/Link";

const Footer = ({ className, ...props }) => {
  return (
    <footer
      className={twMerge("w-full bg-footer-background py-9", className)}
      {...props}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 mt-[18px]">
        <div className="flex flex-col w-full gap-8 justify-between">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-0">
            {/* Logo and Description */}
            <div className="flex flex-col gap- lg:gap-[26px] w-full lg:w-1/5">
              <Link to="/">
                <Logo
                  src="/images/image_logo2.png"
                  width="120"
                  height="50"
                  className="w-36 sm:w-40 lg:w-44 h-auto" // slightly larger on mobile/tablet
                />
              </Link>
              <p
                className="text-base font-normal leading-[30px] text-text-white w-full"
                style={{ fontFamily: "Raleway" }}
              >
                High-performing contact center delivering exceptional customer
                support outsourcing since 2010.
              </p>
            </div>

            {/* Services and Industries */}
            <div className="flex flex-col sm:flex-row justify-between items-start w-full lg:w-auto gap-8 sm:gap-12 lg:gap-[67px] mt-4 sm:mt-0">
              {/* Services */}
              <div className="flex flex-col gap-3 sm:gap-5 w-full sm:w-auto">
                <h3
                  className="text-lg font-normal leading-[23px] text-text-white"
                  style={{ fontFamily: "Raleway" }}
                >
                  Services
                </h3>
                <ul className="flex flex-col gap-2 sm:gap-3">
                  <li>
                    <Link
                      href="#"
                      className="text-base font-normal leading-sm text-text-white hover:text-primary-background"
                      style={{ fontFamily: "Raleway" }}
                    >
                      Voice Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base font-normal leading-sm text-text-white hover:text-primary-background"
                      style={{ fontFamily: "Raleway" }}
                    >
                      Omnichannel CX
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base font-normal leading-sm text-text-white hover:text-primary-background"
                      style={{ fontFamily: "Raleway" }}
                    >
                      AI Integration
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Industries */}
              <div className="flex flex-col gap-3 sm:gap-5 w-full sm:w-auto mt-4 sm:mt-0">
                <h3
                  className="text-lg font-normal leading-[23px] text-text-white"
                  style={{ fontFamily: "Raleway" }}
                >
                  Industries
                </h3>
                <ul className="flex flex-col gap-2 sm:gap-3">
                  <li>
                    <Link
                      href="#"
                      className="text-base font-normal leading-sm text-text-white hover:text-primary-background"
                      style={{ fontFamily: "Raleway" }}
                    >
                      Telecom
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base font-normal leading-sm text-text-white hover:text-primary-background"
                      style={{ fontFamily: "Raleway" }}
                    >
                      E-commerce
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base font-normal leading-sm text-text-white hover:text-primary-background"
                      style={{ fontFamily: "Raleway" }}
                    >
                      Travel & Hospitality
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base font-normal leading-sm text-text-white hover:text-primary-background"
                      style={{ fontFamily: "Raleway" }}
                    >
                      Health Tech
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col gap-4 w-full lg:w-auto mt-4 lg:mt-0">
              <h3
                className="text-lg font-normal leading-[23px] text-text-white"
                style={{ fontFamily: "Raleway" }}
              >
                Contact
              </h3>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center">
                <img
                  src="/images/img_marker_pin_01.svg"
                  alt="Location"
                  className="w-6 h-6 flex-shrink-0"
                />
                <a  href="https://www.google.com/maps/place/MX68%2BJJR+Panasiatic+Call+Centers,+74+Circumferential+Rd,+Bacolod,+6100+Negros+Occidental/@10.6614793,122.964176,753m/data=!3m2!1e3!4b1!4m6!3m5!1s0x33aed1957cc8f987:0xa788a04ac8c8ece4!8m2!3d10.6614793!4d122.9667509!16s%2Fg%2F1vbnly72?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D"
                  className="text-base font-normal leading-sm text-text-white-muted"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "Raleway" }}
                >
                  PanAsiatic Solutions Building, C. Hilado Circumferencial Road,
                  Bacolod City, Philippines
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center">
                <img
                  src="/images/img_phone_call_01.svg"
                  alt="Phone"
                  className="w-6 h-6 flex-shrink-0"
                />
                <a href="tel:+63347055800"
                  className="text-base font-normal leading-sm text-text-white-muted"
                  style={{ fontFamily: "Raleway" }}
                >
                  +63 34 705 5800
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center">
                <img
                  src="/images/img_mail_05.svg"
                  alt="Email"
                  className="w-6 h-6 flex-shrink-0"
                />
                <a href="mailto:generalmanager@panasiaticcallcenters.com?subject=Inquiry&body="
                  className="text-base font-normal leading-sm text-text-white-muted"
                  style={{ fontFamily: "Raleway" }}
                >
                  generalmanager@panasiaticcallcenters.com
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-border-muted mt-8 sm:mt-12"></div>

          {/* Copyright */}
          <p
            className="text-xs font-normal leading-xs text-center text-text-white mt-4 sm:mt-6"
            style={{ fontFamily: "Raleway" }}
          >
            2025 PanAsiatic Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
