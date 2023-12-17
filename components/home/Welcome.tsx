import Card, { CardBody } from '@/lib/components/Card';
import Center from '@/lib/components/Center';
import Flex from '@/lib/components/Flex';
import Image from '@/lib/components/Image';
import SimpleGrid from '@/lib/components/SimpleGrid';
import Stack from '@/lib/components/Stack';
import { Heading, Text } from '@/lib/components/Typography';

export default function Welcome() {
  return (
    <Flex w='100%' h='100%' bg='surface' justify='center'>
      <Card bg='surface' variant='filled' w='80%'>
        <CardBody>
          <SimpleGrid h='100%' alignItems='center' columns={{ base: 1, md: 2 }}>
            <Stack>
              <Heading size='2xl'>Seja bem vindo</Heading>
              <Text fontSize='2xl'>
                Realizamos um trabalho significativo com inclusão social e saúde
                mental caminhando lado a lado.
              </Text>
            </Stack>
            <Center>
              <Image
                src='/static/logos/logo_colorful.png'
                objectFit='contain'
                alt='Logo'
                boxSize='50%'
              />
            </Center>
          </SimpleGrid>
        </CardBody>
      </Card>
    </Flex>
  );
}
