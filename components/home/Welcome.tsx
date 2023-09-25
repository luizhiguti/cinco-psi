import Box from '@/lib/components/Box';
import Card, { CardBody, CardHeader } from '@/lib/components/Card';
import Flex from '@/lib/components/Flex';
import Image from '@/lib/components/Image';
import { Heading, Text } from '@/lib/components/Typography';
import { Center } from '@chakra-ui/react';

export default function Welcome() {
  return (
    <Flex w='100%' bg='brown'>
      <Center w='20%'>
        <Image
          p='4'
          src='/static/logo.svg'
          objectFit='contain'
          alt='Logo'
          w='70%'
        />
      </Center>
      <Card bg='brown' variant='filled' justify='center'>
        <CardHeader>
          <Heading size='lg'>Seja bem vindo</Heading>
        </CardHeader>
        <CardBody>
          <Text fontSize='lg'>
            Realizamos um trabalho significativo com inclusão social e saúde
            mental caminhando lado a lado.
          </Text>
        </CardBody>
      </Card>
    </Flex>
  );
}
