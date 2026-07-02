import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <div className="p-4 flex items-center w-full h-20">
      <div className="flex flex-col items-start text-xl font-semibold text-blue-500">
        <h3>SA Accounting & Qureshi's</h3>
        <h3>Tax Accounting Services</h3>
      </div>
      <div className="flex flex-row items-center ml-auto space-x-4 text-base text-blue-600 font-semibold">
        <HashLink
          smooth
          to="#services"
          className="hover:underline hover:underline-offset-6"
        >
          <span className="ml-4">SERVICES</span>
        </HashLink>
        <HashLink
          smooth
          to="#connect"
          className="hover:underline hover:underline-offset-6"
        >
          <span className="ml-4">CONNECT</span>
        </HashLink>
      </div>
    </div>
  );
}
