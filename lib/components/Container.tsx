import { Container as ChakraContainer, ContainerProps } from '@chakra-ui/react';

export default function Container({ children, ...rest }: ContainerProps) {
  return <ChakraContainer {...rest}>{children}</ChakraContainer>;
}
