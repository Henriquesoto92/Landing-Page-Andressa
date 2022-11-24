import { Container, Flex } from "@mantine/core";
import ButtonEspecial from "../../atoms/ButtomEspecial";

function Footer() {
  return (
    <Container bg="pink.2">
      <Flex h="300px" w="full">
        Footer
        <ButtonEspecial text="Footer" />
      </Flex>
    </Container>
  );
}

export default Footer;
