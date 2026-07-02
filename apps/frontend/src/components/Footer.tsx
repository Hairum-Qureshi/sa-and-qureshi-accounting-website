import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="mx-auto flex h-16 items-center justify-between px-6">
        <p className="lg:text-sm text-xs">
          &copy; {new Date().getFullYear()} SA Accounting & Qureshi's Tax
          Accounting Services. All rights reserved.
        </p>
        <Link
          to="https://github.com/Hairum-Qureshi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 whitespace-nowrap text-xs text-white/50 transition hover:text-white"
        >
          <span>Website by Hairum Qureshi</span>
          <FaGithub className="h-5 w-5 shrink-0" />
        </Link>
      </div>
    </footer>
  );
}
