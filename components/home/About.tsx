import Card, { CardBody } from '@/lib/components/Card';
import Flex from '@/lib/components/Flex';
import Image from '@/lib/components/Image';
import Stack from '@/lib/components/Stack';
import { Heading, Text } from '@/lib/components/Typography';

export default function About() {
  return (
    <Flex w='100%' justify='center' bg='surface' p={4}>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        w='70%'
        variant='filled'
        bg='surface'
        align='center'
      >
        <Image
          objectFit='contain'
          src='/static/as_psis.jpg'
          alt='As Psis'
          boxSize={{ base: '100%', md: '350px' }}
        />
        <CardBody>
          <Stack direction='column' align='center'>
            <Heading size='md'>Sobre Nós</Heading>
            <Text py='4'>
              O cinco.psi é composto por mulheres que tiveram seus caminhos
              ligados pela Psicologia. Trilhando uma jornada com muito
              companheirismo, risos, choros, abraços e aprendizados. Estas cinco
              mulheres decidiram que era hora de expandir essa rede de
              acolhimento A logotipo se baseia na perspectiva de que a
              Psicologia é uma árvore com diversas ramificações de galhos,
              folhas e frutos. Portanto, o cinco.psi acredita que com a promoção
              de Saúde Mental é possível contribuir para a Ramificação desta
              árvore que é a psicologia, visando produzir frutos de acolhimento
              e vulnerabilidade.
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
}
