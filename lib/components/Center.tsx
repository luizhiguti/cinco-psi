import { CenterProps, Center as ChakraCenter } from '@chakra-ui/react';

export default function Center({ children, ...rest }: CenterProps) {
  return <ChakraCenter {...rest}>{children}</ChakraCenter>;
}
