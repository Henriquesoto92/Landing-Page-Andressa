import {
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Container,
  Flex,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons";
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
    <Header height={56} className={classes.header} mb={120}>
      <Container>
        <div className={classes.inner}>
          <Text> Dessa</Text>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            color="#fff"
          />
        </div>
      </Container>
    </Header>
  );
}
