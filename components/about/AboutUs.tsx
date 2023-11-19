import Card, { CardBody } from '@/lib/components/Card';
import Flex from '@/lib/components/Flex';
import Image from '@/lib/components/Image';
import { Text } from '@/lib/components/Typography';
import SectionContent from './SectionContent';

export default function AboutUs() {
  return (
    <Card display='flex' bg='surface' align='center' shadow='none'>
      <CardBody display='flex' alignItems='center'>
        <Flex w='100%' flex={1}>
          <Image
            objectFit='contain'
            src='/static/psis/as_psis.jpg'
            alt='As Psis'
            boxSize='90%'
          />
        </Flex>
        <SectionContent flex={2}>
          <Text fontSize='2xl'>
            O cinco.psi é composto por mulheres que tiveram seus caminhos
            ligados pela Psicologia. Trilhando uma jornada com muito
            companheirismo, risos, choros, abraços e aprendizados. Estas cinco
            mulheres decidiram que era hora de expandir essa rede de acolhimento
            A logotipo se baseia na perspectiva de que a Psicologia é uma árvore
            com diversas ramificações de galhos, folhas e frutos. Portanto, o
            cinco.psi acredita que com a promoção de Saúde Mental é possível
            contribuir para a Ramificação desta árvore que é a psicologia,
            visando produzir frutos de acolhimento e vulnerabilidade.
          </Text>
        </SectionContent>
      </CardBody>
    </Card>
  );
}
