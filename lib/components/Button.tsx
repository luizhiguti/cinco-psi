import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react';

export default function Button({ children, ...rest }: ButtonProps) {
  return <ChakraButton {...rest}>{children}</ChakraButton>;
}
