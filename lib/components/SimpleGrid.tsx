import {
  SimpleGrid as ChakraSimpleGrid,
  SimpleGridProps,
} from '@chakra-ui/react';

export default function SimpleGrid({ children, ...rest }: SimpleGridProps) {
  return <ChakraSimpleGrid {...rest}>{children}</ChakraSimpleGrid>;
}
