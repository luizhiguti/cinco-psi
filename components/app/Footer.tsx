import Flex from '@/lib/components/Flex';
import Stack from '@/lib/components/Stack';
import { Text } from '@/lib/components/Typography';

export default function Footer() {
  return (
    <Flex w='100%' h='100%' bg='orange' align='center' justify='center'>
      <Stack paddingX={20} align='center' fontSize='xl'>
        <Text>
          <Text as='b'>Atenção: </Text>
          Este site não oferece atendimento imediato a pessoas em situação de
          crise suicida.
        </Text>
        <Text>
          Em caso de crise ligue para CVV (Centro de Valorização a vida) - 188
          ou procure um familiar, e se necessário, o hospital mais próximo.
        </Text>
        <Text>
          Havendo risco de morte, ligue imediatamente para o SAMU - 192
        </Text>
      </Stack>
    </Flex>
  );
}
