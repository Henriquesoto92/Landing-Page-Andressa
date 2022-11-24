import { Container, Flex } from "@mantine/core";
import ButtonEspecial from "../../atoms/ButtomEspecial";

function Feedbacks() {
  return (
    <Container bg="yellow.1">
      <Flex h="300px" w="full">
        Feedbacks
        <ButtonEspecial text="Feedbacks" />
      </Flex>
    </Container>
  );
}

export default Feedbacks;
