import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
} from '@chakra-ui/react';
import MdiIcon from '@mdi/react';

interface IconProps extends ChakraIconProps {
  path: string;
}

export default function Icon({ path, ...rest }: IconProps) {
  return (
    <ChakraIcon {...rest}>
      <MdiIcon path={path} />;
    </ChakraIcon>
  );
}
