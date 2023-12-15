import AccordionComponent, {
  AccordionComponentItem,
} from '@/lib/components/Accordion';
import Button from '@/lib/components/Button';
import Card, { CardBody, CardHeader } from '@/lib/components/Card';
import Center from '@/lib/components/Center';
import Icon from '@/lib/components/Icon';
import Stack from '@/lib/components/Stack';
import Tabs from '@/lib/components/Tabs';
import { Heading } from '@/lib/components/Typography';
import styles from '@/styles/about.module.scss';
import { mdiChatQuestionOutline, mdiOpenInNew } from '@mdi/js';
import NextLink from 'next/link';
import FlashyButton from './FlashyButton';

function ProjetoIncluir() {
  const faq: AccordionComponentItem[] = [
    {
      title: '1 - Como funciona a psicoterapia?',
      content: `Atualmente os atendimento do projeto incluir são realizados online,
      desta forma é possível atender brasileiros que estão em diferentes
      lugares do Brasil e do mundo. A sessão tem a duração aproximada de
      50 minutos e ocorre através da Plataforma do Google Meet. É um
      espaço seguro, privado e livre de julgamentos, onde você pode se
      sentir à vontade para ser você e falar sobre o que desejar.`,
    },
    {
      title: '2- Como são marcados os atendimentos?',
      content: `Para marcar um atendimento você precisa se inscrever em nosso
      formulário de inscrição e aguardar uma de nossas profissionais entrar
      em contato para combinar o melhor dia e horário da primeira sessão.`,
    },
    {
      title: '3- A psicoterapia é confidencial?',
      content: `Sim, o código de ética profissional do psicólogo determina que:
      “Art.9° - É dever do psicólogo respeitar o sigilo profissional a fim
      de proteger, por meio da confidencialidade, a intimidade das pessoas,
      grupos ou organizações, a que tenha acesso no exercício profissional.
      A única exceção deste artigo é para caso de situações de risco
      imediato ao paciente ou a terceiros.`,
    },
    {
      title: '4 - Qual valor das sessões?',
      content: `O Conselho de Ética da Psicologia não permite que os profissionais
      divulguem o valor dos atendimentos publicamente, para saber o valor
      da sessão você deve entrar em contato com nós.`,
    },
    {
      title: '5 - Do que preciso para o atendimento online?',
      content: `É necessário um ambiente privado e tranquilo, ter uma boa conexão de
      internet e um computador ou celular para realizar a vídeo chamada
      que é realizada pelo Google Meet`,
    },
    {
      title: '6 - Quanto tempo dura as sessões?',
      content: `Em média de 40 a 50 minutos. A quantidade de encontros serão
      decididos conforme a necessidade, entretanto é recomendado
      inicialmente encontros semanais.`,
    },
    {
      title: '7- Como é a forma de pagamento?',
      content: `Pode ser feito via PIX ou transferência bancária antes das sessões.`,
    },
    {
      title: '8- Como marcar uma sessão?',
      content: (
        <>
          Entre em contato pelo
          <NextLink
            target='_blank'
            href='https://docs.google.com/forms/d/e/1FAIpQLSdKdcnlV4OTtzkkwHXfOxSYQWmqlCVE27xwMweH36TiNVXX5g/viewform'
          >
            {' '}
            link <Icon path={mdiOpenInNew} color='orange' />
          </NextLink>
          .
        </>
      ),
    },
  ];
  const faqPretty: AccordionComponentItem[] = faq.map((it) => ({
    ...it,
    props: {
      m: 4,
      py: 2,
      border: '2px solid',
      borderColor: 'green',
    },
    titleProps: {
      fontSize: 'x-large',
    },
    contentProps: {
      fontSize: 'large',
      color: 'green',
    },
    iconProps: {
      color: 'green',
    },
  }));
  return (
    <Card align='center'>
      <CardHeader display='flex' flexDir='row'>
        <Heading
          flex={2}
          fontWeight='regular'
          fontSize='28px'
          textAlign='justify'
        >
          O projeto nasceu com o intuito de proporcionar uma Psicologia
          acessível, próxima e empática a todos, com atendimento
          psicoterapêutico online.
        </Heading>
        <Center flex={1}>
          <NextLink
            href='https://docs.google.com/forms/d/e/1FAIpQLSdKdcnlV4OTtzkkwHXfOxSYQWmqlCVE27xwMweH36TiNVXX5g/viewform'
            target='_blank'
          >
            <FlashyButton
              bg='brown'
              fontWeight='bold'
              fontSize='28px'
              p={2}
              pb={0}
            >
              Tenho interesse
            </FlashyButton>
          </NextLink>
        </Center>
      </CardHeader>
      <CardBody w='90%'>
        <Stack align='center'>
          <Heading w='fit-content'>
            Dúvidas frequentes
            <Icon
              path={mdiChatQuestionOutline}
              color='orange'
              ml={4}
              boxSize={16}
              mt={-8}
            />
          </Heading>
          <AccordionComponent w='100%' items={faqPretty} />
        </Stack>
      </CardBody>
    </Card>
  );
}

export default function Projects() {
  return (
    <Card className={styles.fillHeight} bg='surface'>
      <CardBody>
        <Tabs
          tabs={[
            {
              tab: <Heading>Projeto Incluir</Heading>,
            },
            {
              tab: <Heading>Em breve...</Heading>,
              props: { isDisabled: true },
            },
          ]}
          panels={[<ProjetoIncluir key='incluir' />]}
        />
      </CardBody>
    </Card>
  );
}
