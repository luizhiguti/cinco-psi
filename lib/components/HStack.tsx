import { BoxProps, HStack as ChakraHStack, ResponsiveValue, StackDirection } from '@chakra-ui/react';
import { JSXElementConstructor, ReactElement } from 'react';

interface HStackProps extends BoxProps {
  direction?: StackDirection;
  divider?: ReactElement<any, string | JSXElementConstructor<any>>;
  isInline?: boolean;
  shouldWrapChildren?: boolean;
  spacing?: ResponsiveValue<string | number | (string & {})>;
}

export default function HStack({ children, ...rest }: HStackProps) {
  return <ChakraHStack {...rest}>{children}</ChakraHStack>;
}
