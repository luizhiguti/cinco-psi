import {
  Card as ChakraCard,
  CardHeader as ChakraCardHeader,
  CardBody as ChakraCardBody,
  CardFooter as ChakraCardFooter,
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
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
