import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-red-500 text-white px-6 py-4 shadow-md">
      <ul className="flex gap-6 items-center">
        <li className="font-bold text-xl">
          <Link href="/">Airbnb Clone</Link>
        </li>
        <li>
          <Link href="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
