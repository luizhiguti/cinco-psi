import { Image as ChakraImage, ImageProps } from '@chakra-ui/react';

export default function Image({ children, ...rest }: ImageProps) {
  return <ChakraImage {...rest}>{children}</ChakraImage>;
}
