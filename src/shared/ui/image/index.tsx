import styled from "styled-components";

type AvatarProps = { photoUrl: string; size: string };
type ImgProps = { photoUrl: string };

const sizes: { [key: string]: string } = {
  large: "168px",
  medium: "75px",
  small: "40px",
};

export const AvatarImg = styled.img.attrs<AvatarProps>((props) => ({
  src: props.photoUrl,
}))<AvatarProps>`
  ${(props) => `
    width: ${sizes[props.size]};
    height: ${sizes[props.size]};
    border-radius: 100%;
    border: 1px solid ${props.theme.color.darkGray};
    cursor: pointer;

    :hover {
      filter: brightness(0.9);
    }
  `}
`;

export const SquareAvatarImg = styled(AvatarImg).attrs<AvatarProps>(
  (props) => ({
    src: props.photoUrl,
  })
)<AvatarProps>`
  ${(props) => `
  `}
  border-radius: 5px;
  border: none;
`;

export const LargeImg = styled.img.attrs<ImgProps>((props) => ({
  src: props.photoUrl,
}))<ImgProps>`
  width: 100%;
  height: 300px;
`;

export const PhotoImg = styled.img.attrs<ImgProps>((props) => ({
  src: props.photoUrl,
}))<ImgProps>`
  width: 210px;
  height: 210px;
`;

export const SmallImg = styled.img.attrs<ImgProps>((props) => ({
  src: props.photoUrl,
}))<ImgProps>`
  width: 40px;
  height: 40px;
`;
