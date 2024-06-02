function Header() {
  return (
    <div className="flex justify-between items-center mx-10 my-5">
      <img src="Logo.png" alt="Logo hotel" />
      <ul className=" group flex items-center gap-8 font-medium text-amber-700/50">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <button className="bg-amber-700/10 px-4 py-2 rounded-full text-amber-700 font-semibold">
        Rooms
      </button>
    </div>
  );
}

export default Header;
