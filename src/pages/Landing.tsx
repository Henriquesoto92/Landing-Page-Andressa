import { Container, Flex } from "@mantine/core";
import {
  Feedbacks,
  Footer,
  Headers,
  Navbar,
  Persona,
  Specialty,
} from "../components/templates";

function Landing() {
  return (
    <Container maw="100vw" mah="100vh" p="0">
      <Navbar />
      <Feedbacks />
      <Footer />
      <Headers />
      <Persona />
      <Specialty />
    </Container>
  );
}

export default Landing;
