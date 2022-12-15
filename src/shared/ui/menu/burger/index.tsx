import { Dispatch, SetStateAction } from "react";
import { BsThreeDots } from "react-icons/bs";
import { StyledBurger } from "./styled";

export const Burger = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <StyledBurger open={open} onClick={handleClick}>
      <BsThreeDots />
    </StyledBurger>
  );
};
