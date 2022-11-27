import { Header, Group, Burger, Flex, Text, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { logoName2 } from "../../../assets";
import { linksNavbar } from "./LinksUtils";
import { useStyles } from "./useStyles";

export default function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = linksNavbar.map((link) => {
    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header className={classes.header} height={56}>
      <Flex
        justify="space-between"
        align="center"
        w="100%"
        px="150px"
        maw="1920px"
      >
        <Image src={logoName2} width="200px" />
        <Group
          spacing={5}
          // className={classes.links}
        >
          {items}
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          color="#fff"
        />
      </Flex>
    </Header>
  );
}
