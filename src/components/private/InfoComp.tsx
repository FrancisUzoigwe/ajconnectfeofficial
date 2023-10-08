import React from "react";
import { useViewPostOne } from "../../hooks/useUserHook";

interface iProps {
  userID?: string;
}

const InfoComp: React.FC<iProps> = ({ userID }) => {
  const { data } = useViewPostOne(userID!);
  return (
    <div>
      <div className="mr-2 text-[13px] font-semibold py-[2px]">
        {data?.name}
      </div>{" "}
    </div>
  );
};

export default InfoComp;
