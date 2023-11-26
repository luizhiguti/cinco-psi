import {
  CardBodyProps,
  CardFooterProps,
  CardHeaderProps,
  CardProps,
  Card as ChakraCard,
  CardBody as ChakraCardBody,
  CardFooter as ChakraCardFooter,
  CardHeader as ChakraCardHeader,
} from '@chakra-ui/react';

export default function Card({ children, ...rest }: CardProps) {
  const defaultProps: CardProps = {
    bg: 'surface',
    variant: 'filled',
  };

  return (
    <ChakraCard {...defaultProps} {...rest}>
      {children}
    </ChakraCard>
  );
}

export function CardHeader({ children, ...rest }: CardHeaderProps) {
  return <ChakraCardHeader {...rest}>{children}</ChakraCardHeader>;
}

export function CardBody({ children, ...rest }: CardBodyProps) {
  return <ChakraCardBody {...rest}>{children}</ChakraCardBody>;
}

export function CardFooter({ children, ...rest }: CardFooterProps) {
  return <ChakraCardFooter {...rest}>{children}</ChakraCardFooter>;
}
