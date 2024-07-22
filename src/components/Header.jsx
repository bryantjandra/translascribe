function Header() {
  return (
    <header className="flex items-center justify-between gap-4 p-4 absolute top-0 left-10 right-10">
      <h1 className="font-medium">
        transla<span className="text-blue-400 font-bold">scribe</span>
      </h1>
      <button className="flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-blue-400">
        <p>New</p>
        <i className="fa-solid fa-plus"></i>
      </button>
    </header>
  );
}

export default Header;
