import Box from '@/lib/components/Box';
import Card, { CardBody, CardFooter, CardHeader } from '@/lib/components/Card';
import Center from '@/lib/components/Center';
import Flex from '@/lib/components/Flex';
import Icon from '@/lib/components/Icon';
import Image from '@/lib/components/Image';
import SimpleGrid from '@/lib/components/SimpleGrid';
import Stack from '@/lib/components/Stack';
import { Heading, Text } from '@/lib/components/Typography';
import { mdiBullseyeArrow, mdiEye, mdiHandHeart } from '@mdi/js';
import { ReactElement } from 'react';

interface CardProps {
  title: string;
  text: string;
  icon: ReactElement;
}

function PrincipleCard({ title, text, icon }: CardProps) {
  return (
    <Box w='75%' borderWidth='1px' borderRadius='lg' borderColor='green' p={5}>
      <Stack align='start' spacing={2}>
        <Flex w={16}>{icon}</Flex>
        <Box mt={2}>
          <Heading size='xl'>{title}</Heading>
          <Text mt={1} fontSize='2xl'>
            {text}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}

export default function Principles() {
  return (
    <Card bg='surface' variant='filled'>
      <CardHeader>
        <Flex
          align='center'
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: 'black',
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: 'black',
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Heading size='2xl' pt={4}>
            Princípios
          </Heading>
        </Flex>
      </CardHeader>
      <CardBody>
        <SimpleGrid columns={3} justifyItems='center'>
          <PrincipleCard
            title='Missão'
            text='Promover saúde mental com inclusão social e respeito às diversidades'
            icon={<Icon path={mdiBullseyeArrow} color='brown' boxSize='auto' />}
          />
          <PrincipleCard
            title='Visão'
            text='Ser referência em saúde mental online no país e no mundo, com olhar inclusivo e acolhedor'
            icon={<Icon path={mdiEye} color='brown' boxSize='auto' />}
          />
          <PrincipleCard
            title='Valores'
            text='Ética, Inclusão Social, Psicoeducação, Sigilo, Confiança e Respeito'
            icon={<Icon path={mdiHandHeart} color='brown' boxSize='auto' />}
          />
        </SimpleGrid>
        <Flex
          mt={12}
          align='center'
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: 'black',
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
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
