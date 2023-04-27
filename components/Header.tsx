import Link from "next/link";

export default function Header() {
  return (
    <header className="header-background text-gray-100 shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">

          <span className="header-title ml-3 text-xl hover:text-indigo-300">
            VirtualSlime
          </span>

        </Link>
        <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto">
          <Link href="/privacy-policy" className="menu mx-5 cursor-pointer hover:text-indigo-300">

            Privacy Policy

          </Link>
          <Link href="/blog" className="menu mx-5 cursor-pointer hover:text-indigo-300">

            Blog

          </Link>
          <Link href="/about" className="menu mx-5 cursor-pointer hover:text-indigo-300">

            About

          </Link>
        </nav>
      </div>
    </header>
  );
}
