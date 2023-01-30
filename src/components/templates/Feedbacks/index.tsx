import { Avatar, Card, Flex, Text, Title } from "@mantine/core";

function Feedbacks() {
  const specialyts = [
    {
      name: "Magda",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
      description:
        "is simply dummy text of the printing and typesetting industry. g software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "Neusa",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
      description:
        "is simply dummy text of the printing and typesetting industry. , when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "Miriam",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
      description:
        " standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "Andressa",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  return (
    <Flex maw="100vw" justify="center" p="20px 200px">
      <Flex w="100%" maw="1920px" direction="row" align="center" gap="40px">
        {specialyts.map((specialyt, index) => (
          <Card
            key={`${specialyt.name}${index}`}
            shadow="sm"
            radius="lg"
            bg="white"
            w="200px"
            h="200px"
          >
            <Flex direction="column" justify="center">
              <Title align="center" size="24px">
                {specialyt.name}
              </Title>

              <Text fs="12px" FontWeight="16px">
                "{specialyt.description}"
              </Text>
            </Flex>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
}

export default Feedbacks;
