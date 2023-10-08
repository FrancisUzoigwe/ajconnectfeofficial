interface iCard {
    image : string
    title : string
    message : string
}

const Card : React.FC <iCard> = ({image , title , message}) => {
  return (
        <div
          className="w-[350px] h-full border rounded-[20px] mx-4 flex items-center flex-col justify-center p-6"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 22px 70px 4px",
          }}
        >
            <div className="w-[70px] h-[70px] flex justify-center items-center ">
                <img src={image} alt="" />
            </div>
            <div className="text-[30px] my-4">{title}</div>
            <div className="text-center w-[65%]">{message}</div>
        </div>
  );
};

export default Card;
