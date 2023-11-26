import {
  Heading as ChakraHeading,
  Text as ChakraText,
  HeadingProps,
  TextProps,
} from '@chakra-ui/react';

export function Text({ children, ...rest }: TextProps) {
  return (
    <ChakraText color='black' {...rest}>
      {children}
    </ChakraText>
  );
}

export function Heading({ children, ...rest }: HeadingProps) {
  return (
    <ChakraHeading color='black' {...rest}>
      {children}
    </ChakraHeading>
  );
}
