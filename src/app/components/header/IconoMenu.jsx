import { RiMenu2Line } from "react-icons/ri";
const IconoMenu = ({ setMenu, Menu }) => {
  return (
    <RiMenu2Line
      className="text-white text-2xl cursor-pointer font-bold"
      onClick={() => setMenu(!Menu)}
    />
  );
};
export default IconoMenu;
