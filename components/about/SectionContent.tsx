import Box from '@/lib/components/Box';
import Stack from '@/lib/components/Stack';
import { Text } from '@/lib/components/Typography';
import { StackProps } from '@chakra-ui/react';

export default function SectionContent({ children, ...rest }: StackProps) {
  return (
    <Stack direction='column' align='center' {...rest}>
      <Box position='relative' alignItems='center' top={8}>
        <Text
          bg='green'
          px={4}
          pt={2}
          color='white'
          fontSize='3xl'
          fontWeight='bold'
          rounded='2xl'
        >
          Sobre Nós
        </Text>
      </Box>
      <Box p={12} border='1px' rounded='2xl'>
        {children}
      </Box>
    </Stack>
  );
}
