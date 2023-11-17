import Card, { CardBody, CardHeader } from '@/lib/components/Card';
import { Heading } from '@/lib/components/Typography';

export default function Team() {
  return (
    <Card align='center' flex={2}>
      <CardHeader>
        <Heading size='2xl'>Equipe</Heading>
      </CardHeader>
      <CardBody></CardBody>
    </Card>
  );
}
