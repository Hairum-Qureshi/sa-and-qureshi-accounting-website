import { FaCheckCircle } from "react-icons/fa";

export default function Header() {
  // remove all props
  return (
    <div className="bg-green-100 p-15 lg:flex">
      <div className="w-full lg:w-1/2 lg:mx-8">
        <h3 className="text-lg font-semibold text-green-500">
          PROFESSIONAL. RELIABLE. TRUSTED.
        </h3>
        <h1 className="text-6xl font-bold leading-14 text-green-900">
          SA Accounting & Tax Solutions You Can Trust
        </h1>
        <p className="text-lg mt-4 text-green-900">
          <span className="text-2xl font-bold text-green-700">
            SA Accounting & Qureshi's Tax Business Services
          </span>{" "}
          are partner companies, and we are here to help you with personalized
          and reliable services for you, your business, family, and friends.
        </p>
        <button
          className="bg-green-500 text-white hover:cursor-pointer px-4 py-2 rounded mt-4 hover:bg-green-600 transition-colors duration-300"
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
        <h3 className="font-semibold text-green-500">
          WE'RE HERE TO HELP WITH...
        </h3>
        <div className="my-3 flex flex-col gap-3">
          <p className="flex">
            <span className="flex-row items-center mr-2">
              <FaCheckCircle className="text-green-500" />
            </span>
            Personalized Services
          </p>
          <p className="flex">
            <span className="flex-row items-center mr-2">
              <FaCheckCircle className="text-green-500" />
            </span>
            Accurate & Timely Filings
          </p>
          <p className="flex">
            <span className="flex-row items-center mr-2">
              <FaCheckCircle className="text-green-500" />
            </span>
            Confidentiality & Security
          </p>
          <p className="flex">
            <span className="flex-row items-center mr-2">
              <FaCheckCircle className="text-green-500" />
            </span>
            Affordable Rates
          </p>
          <p className="flex">
            <span className="flex-row items-center mr-2">
              <FaCheckCircle className="text-green-500" />
            </span>
            Experienced Support
          </p>
        </div>
      </div>
    </div>
  );
}
