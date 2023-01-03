import {
  ActionIcon,
  Button,
  Center,
  Container,
  Flex,
  Image,
  NavLink,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { logoFull } from "../../../assets";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <Container bg="teal.0" maw="100%" p="0">
      <Flex
        maw="1920px"
        direction="row"
        align="center"
        gap="40px"
        justify="start"
        p="20px 100px"
      >
        <Flex w="300px" direction="column" gap="10px">
          <Flex w="fit-content">
            <Image src={logoFull} alt="logo full" height={100} fit="contain" />
          </Flex>
          <Text color="pink.2">Você possui mais duvidas?</Text>
          <Text color="green.4">Entre em contato</Text>
          <Flex gap="10px" direction="column" w="fit-content">
            <Text>Siga minhas redes socias</Text>
            <Flex justify="center" w="100%" gap="10px">
              <ActionIcon size="xl" variant="outline" radius="xl">
                <FaWhatsapp size={32} />
              </ActionIcon>
              <ActionIcon size="xl" variant="outline" radius="xl">
                <FaInstagram size={32} />
              </ActionIcon>
            </Flex>
          </Flex>
        </Flex>
        <Flex w="300px" direction="column" gap="20px">
          <Flex direction="column" gap="5px">
            <Text color="pink.2">Telefone:</Text>
            <Text color="green.4">(51) 99999.9999</Text>
          </Flex>
          <Flex direction="column" gap="5px">
            <Text color="pink.2">Email:</Text>
            <Text color="green.4">Andressa.Fisio@gmail.com</Text>
          </Flex>
        </Flex>
      </Flex>
      <Center h="30px" w="100%" bg="teal.1">
        <UnstyledButton
          component="a"
          href="https://programadoraos30.com.br/"
          target="_blank"
        >
          feito pelo ProgramadorAos30
        </UnstyledButton>
      </Center>
    </Container>
  );
}

export default Footer;
