import Card, { CardBody } from '@/lib/components/Card';
import Center from '@/lib/components/Center';
import Flex from '@/lib/components/Flex';
import Icon from '@/lib/components/Icon';
import Image from '@/lib/components/Image';
import List, { ListItem } from '@/lib/components/List';
import SimpleGrid from '@/lib/components/SimpleGrid';
import Stack from '@/lib/components/Stack';
import { Heading, Text } from '@/lib/components/Typography';
import { mdiArrowRightBottom } from '@mdi/js';

export default function Welcome() {
  return (
    <Flex w='100%' h='100%' bg='surface' justify='center'>
      <Card bg='surface' variant='filled' w={{ base: '100%', md: '80%' }}>
        <CardBody>
          <SimpleGrid h='100%' alignItems='center' columns={{ base: 1, md: 2 }}>
            <Stack>
              <Heading size={{ base: 'xl', md: '2xl' }}>Seja bem vindo</Heading>
              <Text fontSize={{ base: 'xl', md: '2xl' }}>
                Realizamos um trabalho significativo com inclusão social e saúde
                mental caminhando lado a lado.
              </Text>
              <List>
                <ListItem
                  fontSize={{ base: 'xl', md: '2xl' }}
                  display='flex'
                  flexDir='row'
                >
                  <Icon path={mdiArrowRightBottom} mr={2} color='green' />
                  Tornando a psicoterapia possível.
                </ListItem>
              </List>
            </Stack>
            <Center>
              <Image
                src='/static/logos/logo_colorful.png'
                objectFit='contain'
                alt='Logo'
                boxSize={{ base: '75%', md: '50%' }}
              />
            </Center>
          </SimpleGrid>
        </CardBody>
      </Card>
    </Flex>
  );
}
