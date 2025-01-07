import Link from "next/link";

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
 