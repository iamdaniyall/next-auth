import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;
