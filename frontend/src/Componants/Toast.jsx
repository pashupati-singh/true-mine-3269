import { Button, Wrap, WrapItem, useToast } from "@chakra-ui/react";

export function Toast() {
  const toast = useToast();
  console.log("Toast");
  return (
    <Wrap>
      <WrapItem>
        <Button
          onClick={() =>
            toast({
              title: "top",
              position: "top",
              isClosable: true,
            })
          }>
          Show top toast
        </Button>
      </WrapItem>
    </Wrap>
  );
}
