import {
  List as ChakraList,
  ListItem as ChakraListItem,
  ListIcon as ChakraListIcon,
  ListItemProps,
  ListProps,
  IconProps,
} from '@chakra-ui/react';

export default function List({ children, ...rest }: ListProps) {
  return <ChakraList {...rest}>{children}</ChakraList>;
}

export function ListItem({ children, ...rest }: ListItemProps) {
  return <ChakraListItem {...rest}>{children}</ChakraListItem>;
}
