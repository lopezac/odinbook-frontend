import styled from "styled-components";

type AvatarProps = { photoUrl: string; size: string };

export const AvatarImg = styled.img.attrs<AvatarProps>((props) => ({
  src: props.photoUrl,
})) <AvatarProps>`
  ${(props) => `
    width: ${props.size === "large" ? "150px" : "75px"};
    height: ${props.size === "large" ? "150px" : "75px"};
  `}
`;
