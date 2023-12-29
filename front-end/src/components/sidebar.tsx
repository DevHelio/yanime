function SideBar() {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-26 m-0
    flex flex-col bg-gray-950 text-white shadow-lg justify-center p-2"
    >
      <i className="bg-green-200">
        <button>Home</button>
      </i>
      <i className="">
        <button>Recent</button>
      </i>
      <i className="">
        <button>Popular</button>
      </i>
      <i className="">
        <button>Genres</button>
      </i>
      <i className="">
        <button type="button">Random</button>
      </i>
    </div>
  );
}

export default SideBar;
