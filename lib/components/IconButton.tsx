import {
  IconButton as ChakraIconButton,
  IconButtonProps,
} from '@chakra-ui/react';

export default function IconButton({ children, ...rest }: IconButtonProps) {
  return <ChakraIconButton {...rest}>{children}</ChakraIconButton>;
}
