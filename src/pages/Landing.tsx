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
    <div>
      <Container w="full">
        <Navbar />
        <Feedbacks />
        <Footer />
        <Headers />
        <Persona />
        <Specialty />
      </Container>
    </div>
  );
}

export default Landing;
