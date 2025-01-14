import Link from 'next/link';
import React from 'react';

const getCurrentYear = () => {
  return new Date().getFullYear();
};
const currentYear = getCurrentYear();

const Footer = () => {
  return (
    <div className="px-8 py-5 font-chakrapetch pb-10 text-center w-full flex justify-center items-center mt-[2.625rem] bg-blue text-white">
      <div className="flex flex-col w-full mx-[50px]">
        <div
          id="credits"
          className="flex flex-col text-center lg:flex-row items-center lg:justify-between px-0 w-full mt-[2.625rem]"
        >
          <div className="[&_a:hover]:text-pink text-center lg:text-left mb-4 lg:mb-0 text-md ">
            <p>
              Assets by
              <Link href="https://www.facebook.com/SAMAHANCreativeTeam">
                <strong> SAMAHAN Creative Team </strong>
              </Link>
            </p>

            <p>
              Developed by
              <Link href="/MeetTheDevs">
                <strong> SAMAHAN Systems Development </strong>
              </Link>
            </p>
          </div>
          <p className="text-md font-normal lg:mt-0">
            © {currentYear} <strong>SAMAHAN </strong> All For More
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
