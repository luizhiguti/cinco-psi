import { Flex as ChakraFlex, FlexProps } from '@chakra-ui/react';

export default function Flex({ children, ...rest }: FlexProps) {
  return <ChakraFlex {...rest}>{children}</ChakraFlex>;
}
