import Card, { CardBody } from '@/lib/components/Card';
import Center from '@/lib/components/Center';
import Flex from '@/lib/components/Flex';
import Image from '@/lib/components/Image';
import Stack from '@/lib/components/Stack';
import { Heading, Text } from '@/lib/components/Typography';

export default function Welcome() {
  return (
    <Flex w='100%' h='100%' bg='surface' justify='center'>
      <Card bg='surface' variant='filled'>
        <CardBody display='flex' alignItems='center'>
          <Stack>
            <Heading size='2xl'>Seja bem vindo</Heading>
            <Text fontSize='2xl'>
              Realizamos um trabalho significativo com inclusão social e saúde
              mental caminhando lado a lado.
            </Text>
          </Stack>
          <Center w='100%'>
            <Image
              src='/static/logo.svg'
              objectFit='contain'
              alt='Logo'
              w='50%'
            />
          </Center>
        </CardBody>
      </Card>
    </Flex>
  );
}
