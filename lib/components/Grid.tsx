import {
  Grid as ChakraGrid,
  GridItem as ChakraGridItem,
  GridItemProps,
  GridProps,
} from '@chakra-ui/react';

export default function Grid({ children, ...rest }: GridProps) {
  return <ChakraGrid {...rest}>{children}</ChakraGrid>;
}

export function GridItem({ children, ...rest }: GridItemProps) {
  return <ChakraGridItem {...rest}>{children}</ChakraGridItem>;
}
