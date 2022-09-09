import Link from "next/link";

export default function Header() {
  return (
    <header className="header-background text-gray-100 shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
            <span className="header-title ml-3 text-xl">VirtualSlime</span>
          </a>
        </Link>
        <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto">
          <Link href="/blog">
            <a className="menu mx-5 cursor-pointer hover:text-indigo-300">
              Blog
            </a>
          </Link>
          <Link href="/about">
            <a className="menu mx-5 cursor-pointer hover:text-indigo-300">
              About
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}