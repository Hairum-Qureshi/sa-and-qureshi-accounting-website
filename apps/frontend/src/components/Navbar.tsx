import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <div className="p-4 flex items-center w-full h-15 bg-green-700">
      <div className="flex flex-row items-center ml-auto space-x-4 text-base text-white font-semibold">
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
