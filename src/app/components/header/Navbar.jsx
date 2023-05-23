const Navbar = ({ Menu }) => {
  return (
    <nav
      className={`efecto_blur transition-all duration-500 ${
        Menu ? "translate-x-0" : "-translate-x-full"
      } p-10  flex justify-center flex-col   `}
    >
      <ul className="text-white font-semibold text-sm lg:text-base w-full flex flex-col  gap-4 justify-items-center items-center">
        <li className=" px-6 py-2 cursor-pointer  ">Home</li>
        <li className=" px-6 py-2 cursor-pointer ">Browse</li>
        <li className=" px-6 py-2 cursor-pointer ">Updates</li>
        <li className=" px-6 py-2 cursor-pointer ">Pricing</li>
      </ul>
      <button className="button mt-6 text-sm lg:text-base  py-3 px-4 text-white font-semibold hover:opacity-80 transition-opacity">
        Sign Up
      </button>
    </nav>
  );
};
export default Navbar;
