import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-sky-950 text-white">
      <div className="mx-auto flex h-16 items-center justify-between px-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} SA Accounting & Qureshi's Tax Accounting
          Services. All rights reserved.
        </p>

        <a
          href="https://github.com/Hairum-Qureshi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-white/50 transition hover:text-white"
        >
          <span>Website by Hairum Qureshi</span>
          <FaGithub className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
}
