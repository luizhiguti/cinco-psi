import { BoxProps, Box as ChakraBox } from '@chakra-ui/react';

// ChakraBox: Box is the most abstract component on top of which all other Chakra UI components are built.
// By default, it renders a `div` element

export default function Box({ children, ...rest }: BoxProps) {
  return <ChakraBox {...rest}>{children}</ChakraBox>;
}
