import { FaCheckCircle } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-[#f0f6fd] p-15 lg:flex">
      <div className="w-full lg:w-1/2 lg:mx-8">
        <h3 className="text-lg font-semibold text-blue-500">
          PROFESSIONAL. RELIABLE. TRUSTED.
        </h3>
        <h1 className="text-6xl font-bold leading-14">
          Accounting & Tax <br /> Solutions You Can Trust
        </h1>
        <p className="text-lg mt-4">
          SA Accounting & Qureshi's Tax Accounting Services are here to help you
          with personalized and reliable services for you, your family, and your
          business.
        </p>
        <button
          className="bg-blue-500 text-white hover:cursor-pointer px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors duration-300"
          onClick={() => {
            const connectSection = document.getElementById("connect");
            if (connectSection) {
              connectSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Get in Touch
        </button>
      </div>
      <div className="flex-1 mx-8 text-lg lg:my-0 my-10">
        <h3 className="font-semibold text-blue-500">
          WE'RE HERE TO HELP WITH...
        </h3>
        <div className="my-3 flex flex-col gap-3">
          <p className="flex">
            <span className="flex-row items-center mr-2">
              <FaCheckCircle className="text-blue-500" />
            </span>
            Personalized Service
          </p>
          <p className="flex">
            <span className="flex-row items-center mr-2">
              <FaCheckCircle className="text-blue-500" />
            </span>
            Accurate & Timely Filings
          </p>
          <p className="flex">
            <span className="flex-row items-center mr-2">
              <FaCheckCircle className="text-blue-500" />
            </span>
            Confidentiality & Security
          </p>
          <p className="flex">
            <span className="flex-row items-center mr-2">
              <FaCheckCircle className="text-blue-500" />
            </span>
            Affordable Rates
          </p>
          <p className="flex">
            <span className="flex-row items-center mr-2">
              <FaCheckCircle className="text-blue-500" />
            </span>
            Experienced Support
          </p>
        </div>
      </div>
    </div>
  );
}
