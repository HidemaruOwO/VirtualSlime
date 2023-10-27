import Link from "next/link";

export default function Header() {
  return (
    <header className="header-background w-full text-gray-100 shadow">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <Link
          href="/"
          className="title-font mb-4 flex items-center font-medium md:mb-0 md:w-1/5 md:justify-start"
        >
          <span className="header-title ml-3 text-xl hover:text-indigo-300">
            VirtualSlime
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end text-base md:ml-auto md:w-4/5">
          <Link
            href="/privacy-policy"
            className="menu mx-5 cursor-pointer hover:text-indigo-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/blog"
            className="menu mx-5 cursor-pointer hover:text-indigo-300"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="menu mx-5 cursor-pointer hover:text-indigo-300"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
