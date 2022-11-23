import { Container, Flex } from "@mantine/core";
import { useState } from "react";
import { NavbarResponsive } from "../components/templates/navbar";

const links = [{ link: "home", label: "home" }];

function Landing() {
  return (
    <Container bg="red">
      <Flex bg="red" h="300px" w="300px">
        {" "}
        pronto
      </Flex>
    </Container>
  );
}

export default Landing;
