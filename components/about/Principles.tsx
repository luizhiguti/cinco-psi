import Box from '@/lib/components/Box';
import Card, { CardBody, CardHeader } from '@/lib/components/Card';
import Flex from '@/lib/components/Flex';
import Icon from '@/lib/components/Icon';
import SimpleGrid from '@/lib/components/SimpleGrid';
import Stack from '@/lib/components/Stack';
import { Heading, Text } from '@/lib/components/Typography';
import { useBreakpointValue } from '@chakra-ui/react';
import { mdiBullseyeArrow, mdiEye, mdiHandHeart } from '@mdi/js';
import { ReactElement } from 'react';

interface CardProps {
  title: string;
  text: string;
  icon: ReactElement;
}

function PrincipleCard({ title, text, icon }: CardProps) {
  return (
    <Box w='100%' borderWidth='1px' borderRadius='lg' borderColor='green' p={4}>
      <Stack align='start' spacing={2}>
        <Flex w={{ base: 12, md: 16 }}>{icon}</Flex>
        <Box mt={2}>
          <Heading size={{ base: 'lg', md: 'xl' }}>{title}</Heading>
          <Text mt={1} fontSize={{ base: 'xl', md: '2xl' }}>
            {text}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}

export default function Principles() {
  return (
    <Card bg='surface' variant='filled' pb={8}>
      <CardHeader>
        <Flex
          align='center'
          _before={{
            content: '""',
            borderBottom: useBreakpointValue({ base: 'none', md: '1px solid' }),
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
          <Heading size={{ base: 'xl', md: '2xl' }} pt={{ base: 2, md: 4 }}>
            Princípios
          </Heading>
        </Flex>
      </CardHeader>
      <CardBody py={{ base: 0, md: 5 }}>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          justifyItems='center'
          spacing={{ base: 6, md: 12 }}
        >
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
      </CardBody>
    </Card>
  );
}
