import styled from "styled-components";

export const AvatarImg = styled.img.attrs<{ photoUrl: string }>((props) => ({
  src: props.photoUrl,
}))<{ size: string; photoUrl: string }>`
  ${(props) => `
    width: ${props.size === "large" ? "300px" : "100px"};
    height: ${props.size === "large" ? "300px" : "100px"};
  `}
`;
