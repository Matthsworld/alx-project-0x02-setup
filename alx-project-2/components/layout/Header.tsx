import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-around">
        <Link href="/home" legacyBehavior>
          <a className="hover:text-blue-400">Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="hover:text-blue-400">About</a>
        </Link>
        <Link href="/posts" legacyBehavior>
          <a className="hover:text-blue-400">Posts</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

/*import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
*/
/*const Header = () => {
    return (
      <header>
        <nav>
          <h1>ALX Project 2</h1>
        </nav>
      </header>
    );
  };
  
  export default Header;
  */
 