import Box from '@/lib/components/Box';
import Button from '@/lib/components/Button';
import Drawer from '@/lib/components/Drawer';
import Flex from '@/lib/components/Flex';
import HStack from '@/lib/components/HStack';
import Icon from '@/lib/components/Icon';
import IconButton from '@/lib/components/IconButton';
import Image from '@/lib/components/Image';
import Stack from '@/lib/components/Stack';
import { useDisclosure } from '@chakra-ui/react';
import { mdiMenu } from '@mdi/js';
import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface SectionButtonProps {
  children: React.ReactNode;
  href?: string;
  section?: string;
  onClick?: Function;
}

function SectionButton({
  children,
  href = '#',
  section,
  onClick,
}: SectionButtonProps) {
  const router = useRouter();
  const path = usePathname();

  const handleNavigate = (e: React.MouseEvent) => {
    // prevent default behavior
    e.preventDefault();

    // custom navigation
    if (href !== path) router.push(href);

    // custom behaviour on click
    if (onClick) onClick();

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
        onClick={handleNavigate}
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* mobile */}
      <Flex
        display={{ base: 'flex', md: 'none' }}
        bg='green'
        position='fixed'
        w='100%'
        zIndex={1}
        h={16}
        align='center'
      >
        <IconButton
          aria-label='menu-icon'
          ml={2}
          variant='ghost'
          color='white'
          onClick={onOpen}
        >
          <Icon path={mdiMenu} boxSize='75%' onClick={onOpen} />
        </IconButton>
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          placement='left'
          overlay
          contentProps={{ bg: 'green' }}
          body={
            <Stack>
              {sections.map((it, index) => (
                <SectionButton
                  key={index}
                  href={it.href}
                  section={it.section}
                  onClick={onClose}
                >
                  {it.text}
                </SectionButton>
              ))}
            </Stack>
          }
          footer={
            <Flex w='100%' justify='center'>
              <Image
                src='/static/logos/icon_white.png'
                objectFit='contain'
                alt='Logo'
                boxSize='30%'
              />
            </Flex>
          }
        />
      </Flex>
      {/* desktop */}
      <Flex
        display={{ base: 'none', md: 'flex' }}
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
