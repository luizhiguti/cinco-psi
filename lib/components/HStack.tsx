import { HStack as ChakraHStack, StackProps } from '@chakra-ui/react';

export default function HStack({ children, ...rest }: StackProps) {
  return <ChakraHStack {...rest}>{children}</ChakraHStack>;
}
