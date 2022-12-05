import { Dispatch, SetStateAction } from "react";
import { Button } from "shared/ui/button";
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
    <>
      <StyledBurger open={open} onClick={handleClick}>
        <Button>burger</Button>
      </StyledBurger>
    </>
  );
};
