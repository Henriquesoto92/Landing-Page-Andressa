import { Button, Container, Flex } from "@mantine/core";

type buttomProps = {
  text: string;
};

function ButtonEspecial({ text }: buttomProps) {
  return <Button bg="orange">{text}</Button>;
}

export default ButtonEspecial;
