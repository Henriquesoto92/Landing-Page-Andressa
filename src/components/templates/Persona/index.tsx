import { fotoDessa } from "../../../assets";
import { Container, Flex, Image, Text, Title } from "@mantine/core";

function Persona() {
  return (
    <Container bg="white" maw="1920px" p="20px 200px">
      <Flex w="full" direction="column" align="center" gap="40px">
        <Title color="red.3" order={1}>
          Especialista em Saúde Pélvica e Obstétrica
        </Title>

        <Flex gap="100px">
          <Text color="teal.3" maw="50%">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis distinctio est minus, cum provident asperiores
            veritatis, voluptatem eius amet iure rerum magni labore dicta ex
            voluptate eum? Iste, nostrum hic. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            <br />
            <br />
            Rerum, nostrum debitis officiis excepturi vero repudiandae iure
            tempora voluptates atque id delectus harum? Deserunt ullam
            voluptates aperiam officia numquam sint suscipit? Lorem ipsum dolor
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <br />
            Illo, voluptatem. Maxime perspiciatis dolorem iste? Aut cum nesciunt
            molestiae quam minus, obcaecati qui nisi maiores eos quod provident
            aliquid odio commodi!
          </Text>

          <Image
            width={300}
            height={"auto"}
            radius="xl"
            src={fotoDessa}
            alt="teste"
          />
        </Flex>
      </Flex>
    </Container>
  );
}

export default Persona;
