import {
  ActionIcon,
  Center,
  Flex,
  Image,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { logoFull } from "../../../assets";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <Flex bg="teal.0" maw="100vw" direction="column" align="center" p="0">
      <Flex
        maw="1920px"
        direction="row"
        justify="center"
        gap="40px"
        align="center"
        p="20px 100px"
      >
        <Flex w="fit-content" direction="column" gap="10px">
          <Flex w="fit-content">
            <Image src={logoFull} alt="logo full" height={100} fit="contain" />
          </Flex>
          <Text color="pink.2">Você possui mais duvidas?</Text>
          <Text color="green.4">Entre em contato</Text>
          <Flex gap="10px" direction="column" w="fit-content">
            <Text>Siga minhas redes socias</Text>
            <Flex justify="center" w="100%" gap="10px">
              <ActionIcon size="xl" variant="light" radius="xl" bg="green.2">
                <FaWhatsapp size={24} color="white" />
              </ActionIcon>
              <ActionIcon size="xl" variant="light" radius="xl" bg="green.2">
                <FaInstagram size={24} color="white" />
              </ActionIcon>
            </Flex>
          </Flex>
        </Flex>
        <Flex w="fit-content" direction="column" gap="20px">
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
    </Flex>
  );
}

export default Footer;
