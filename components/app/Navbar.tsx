import Box from '@/lib/components/Box';
import Button from '@/lib/components/Button';
import Flex from '@/lib/components/Flex';
import HStack from '@/lib/components/HStack';
import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface SectionButtonProps {
  children: React.ReactNode;
  href?: string;
  section?: string;
}

function SectionButton({ children, href = '#', section }: SectionButtonProps) {
  const router = useRouter();
  const path = usePathname();

  const handleNavigate = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    // prevent default behavior
    e.preventDefault();

    // custom navigation
    if (href !== path) router.push(href);

    if (!section) return;
    const targetId = section;

    // await for 'document' update on route changes
    setTimeout(() => {
      // get the element by id and use scrollIntoView
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <NextLink href={href} onClick={handleNavigate}>
      <Button
        variant='ghost'
        color='white'
        _hover={{ bg: 'orange' }}
        fontWeight='normal'
        fontSize='xl'
      >
        {children}
      </Button>
    </NextLink>
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
      href: '/sobre',
      section: 'about',
    },
    {
      text: 'Princípios',
      href: '/sobre',
      section: 'principles',
    },
    {
      text: 'Projetos',
      href: '/sobre',
      section: 'projects',
    },
    {
      text: 'Contatos',
      href: '/sobre',
      section: 'contacts',
    },
  ];

  return (
    <>
      <Flex
        bg='green'
        position='fixed'
        w='100%'
        zIndex={1}
        h={16}
        justifyContent='center'
      >
        <HStack>
          {sections.map((it, index) => (
            <SectionButton key={index} href={it.href} section={it.section}>
              {it.text}
            </SectionButton>
          ))}
        </HStack>
      </Flex>
      <Box h={16} />
    </>
  );
}
