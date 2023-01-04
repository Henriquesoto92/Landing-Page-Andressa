import { Container, Flex } from "@mantine/core";
import {
  Feedbacks,
  Footer,
  Headers,
  Navbar,
  Persona,
  Specialyt,
} from "../components/templates";

function Landing() {
  return (
    <Container maw="100vw" h="100vh" p="0">
      <Navbar />
      <Headers />
      <Persona />
      <Specialyt />
      <Feedbacks />
      <Footer />
    </Container>
  );
}

export default Landing;
