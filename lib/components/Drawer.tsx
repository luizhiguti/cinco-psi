import {
  Drawer as ChakraDrawer,
  DrawerProps as ChakraDrawerProps,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentProps,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface DrawerProps extends Omit<ChakraDrawerProps, 'children'> {
  overlay?: boolean;
  contentProps?: DrawerContentProps;
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
}

export default function Drawer(props: DrawerProps) {
  return (
    <ChakraDrawer {...props}>
      {props.overlay && <DrawerOverlay />}
      <DrawerContent {...props.contentProps}>
        <DrawerCloseButton />
        <DrawerHeader>{props.header}</DrawerHeader>
        <DrawerBody>{props.body}</DrawerBody>
        <DrawerFooter>{props.footer}</DrawerFooter>
      </DrawerContent>
    </ChakraDrawer>
  );
}
