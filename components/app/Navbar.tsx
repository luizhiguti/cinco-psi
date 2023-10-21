import Box from '@/lib/components/Box';
import Button from '@/lib/components/Button';
import Flex from '@/lib/components/Flex';
import HStack from '@/lib/components/HStack';
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

function SectionButton({
  children,
  href = '',
}: {
  children?: React.ReactNode;
  href?: string;
}) {
  return (
    <Link as={NextLink} href={href}>
      <Button
        variant='ghost'
        color='white'
        _hover={{ bg: 'orange' }}
        fontWeight='normal'
        fontSize='xl'
      >
        {children}
      </Button>
    </Link>
  );
}

export default function Navbar() {
  const sections = [
    {
      text: 'Início',
      href: '/',
    },
    {
      text: 'Sobre Nós',
      href: 'sobre',
    },
    {
      text: 'Princípios',
    },
    {
      text: 'Equipe',
    },
    {
      text: 'Projetos',
    },
    {
      text: 'Dúvidas',
    },
    {
      text: 'Redes Sociais',
    },
  ];
  return (
    <Box bg='green' px={4}>
      <Flex h={16} alignItems='center' justifyContent='center'>
        <HStack>
          {sections.map((it, index) => (
            <SectionButton key={index} href={it.href}>
              {it.text}
            </SectionButton>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
