import Box from '@/lib/components/Box';
import Button from '@/lib/components/Button';
import Flex from '@/lib/components/Flex';
import HStack from '@/lib/components/HStack';

function SectionButton({ children }: { children?: React.ReactNode }) {
  return (
    <Button
      variant='ghost'
      color='white'
      _hover={{ bg: 'orange' }}
      fontWeight='normal'
      fontSize='xl'
    >
      {children}
    </Button>
  );
}

export default function Navbar() {
  const sections = [
    {
      text: 'Início',
      href: '#',
    },
    { text: 'Princípios' },
    { text: 'Equipe' },
    { text: 'Projetos' },
    { text: 'Dúvidas' },
    { text: 'Redes sociais' },
  ];
  return (
    <Box bg='green' px={4}>
      <Flex h={16} alignItems='center' justifyContent='center'>
        <HStack>
          {sections.map((it, index) => (
            <SectionButton key={index}>{it.text}</SectionButton>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
