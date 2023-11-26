import Button from '@/lib/components/Button';
import Card, { CardBody, CardHeader } from '@/lib/components/Card';
import Center from '@/lib/components/Center';
import Tabs from '@/lib/components/Tabs';
import { Heading } from '@/lib/components/Typography';
import styles from '@/styles/about.module.scss';
import NextLink from 'next/link';

function ProjetoIncluir() {
  return (
    <Card>
      <CardHeader display='flex' flexDir='row'>
        <Heading flex={2} fontWeight='regular' textAlign='justify'>
          O projeto nasceu com o intuito de proporcionar uma Psicologia
          acessível, próxima e empática a todos, com atendimento
          psicoterapêutico online.
        </Heading>
        <Center flex={1}>
          <Button size='lg'>
            <NextLink
              href='https://docs.google.com/forms/d/e/1FAIpQLSdKdcnlV4OTtzkkwHXfOxSYQWmqlCVE27xwMweH36TiNVXX5g/viewform'
              target='_blank'
            >
              Tenho interesse
            </NextLink>
          </Button>
        </Center>
      </CardHeader>
    </Card>
  );
}

export default function Projects() {
  return (
    <Card className={styles.fillHeight} bg='surface'>
      <CardBody>
        <Tabs
          tabs={[
            { tab: <Heading>Projeto Incluir</Heading> },
            {
              tab: <Heading>Em breve...</Heading>,
              props: { isDisabled: true },
            },
          ]}
          panels={[<ProjetoIncluir />]}
        />
      </CardBody>
    </Card>
  );
}
