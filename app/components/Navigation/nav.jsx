import Link from 'next/link';

const Nav = () => (
  <nav className="bg-white border-gray-200 sticky top-0">
    <div className=" flex flex-wrap items-center justify-between mx-auto p-4 max-w-screen-xl">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-semibold whitespace-nowrap ">
          Three River
        </span>
      </a>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          type="button"
          class="text-white bg-black hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition ease-in-out duration-150">
          Get started
        </button>

        <button
          data-collapse-toggle="navbar-cta"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-cta"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-cta">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
          <li className="hover:text-red-700">
            <Link href="/">Home </Link>
          </li>
          <li className="hover:text-red-700">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-red-700">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="hover:text-red-700">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Nav;
