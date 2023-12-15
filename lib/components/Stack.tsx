import { Stack as ChakraStack, StackProps } from '@chakra-ui/react';

export default function Stack({ children, ...rest }: StackProps) {
  return <ChakraStack {...rest}>{children}</ChakraStack>;
}
