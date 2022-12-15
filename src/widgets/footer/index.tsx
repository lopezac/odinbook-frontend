import { BsGithub } from "react-icons/bs";
import { Layout, Anchor, Para } from "shared/ui";
import { FooterRow } from "./styles";

export const Footer = () => {
  return (
    <Layout.Footer>
      <FooterRow>
        <Para>Axel C. Lopez @Copyright 2022</Para>
        <Anchor href={`https://github.com/lopezac`}>
          <BsGithub />
        </Anchor>
      </FooterRow>
    </Layout.Footer>
  );
};
