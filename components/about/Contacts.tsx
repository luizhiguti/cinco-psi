import Card, { CardBody, CardHeader } from '@/lib/components/Card';
import Flex from '@/lib/components/Flex';
import Icon from '@/lib/components/Icon';
import Image from '@/lib/components/Image';
import Stack from '@/lib/components/Stack';
import { Heading, Text } from '@/lib/components/Typography';
import { useBreakpointValue } from '@chakra-ui/react';
import { mdiEmail, mdiInstagram } from '@mdi/js';
import NextLink from 'next/link';

export default function Contacts() {
  const items = [
    {
      icon: mdiEmail,
      text: 'contatocinco.psi@gmail.com',
      href: 'mailto:contatocinco.psi@gmail.com',
    },
    {
      icon: mdiInstagram,
      text: '@cinco.psi',
      href: 'https://www.instagram.com/cinco.psi',
    },
  ];
  return (
    <Card align='center'>
      <CardHeader>
        <Heading>Contatos</Heading>
      </CardHeader>
      <CardBody w='100%'>
        <Stack align='center'>
          {items.map((it, index) => (
            <NextLink key={index} href={it.href} target='_blank'>
              <Text fontSize='xl'>
                <Icon path={it.icon} mr={2} />
                {it.text}
              </Text>
            </NextLink>
          ))}
        </Stack>
        <Flex
          mt={12}
          align='center'
          _before={{
            content: '""',
            borderBottom: useBreakpointValue  ({ base: 'none', md: '1px solid' }),
            borderColor: 'black',
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: useBreakpointValue({ base: 'none', md: '1px solid' }),
            borderColor: 'black',
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Image
            src='/static/logos/icon_black.png'
            objectFit='contain'
            alt='Logo'
            boxSize='75px'
          />
        </Flex>
      </CardBody>
    </Card>
  );
}
