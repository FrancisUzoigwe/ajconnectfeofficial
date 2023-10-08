import { Link } from "react-router-dom";
interface iButton {
  text?: string;
  color?: string;
  bgcolor?: string;
  textcolor?: string;
  link?: string;
}
const ButtonProps: React.FC<iButton> = ({
  text,
  color,
  bgcolor,
  textcolor,
  link,
}) => {
  return (
    <div>
      <Link to={link!}>
        <button
          className={`px-[15px] py-[5px] rounded-[5px] hover:scale-105 duration-300 transition-all${color} ${bgcolor} ${textcolor} font-semibold`}
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

export default ButtonProps;
