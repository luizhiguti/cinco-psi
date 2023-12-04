import Box from '@/lib/components/Box';
import { BoxProps, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface FlashyButtonProps extends BoxProps {}

export default function FlashyButton({ children, ...rest }: FlashyButtonProps) {
  const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); background-color: #cda95a }
  20% { transform: scale(1.5) rotate(0); background-color: #cf913f }
  40% { transform: scale(1.5) rotate(0); background-color: #cf913f }
  60% { transform: scale(1) rotate(0); background-color: #cda95a }
  80% { transform: scale(1) rotate(0); background-color: #cda95a }
  100% { transform: scale(1) rotate(0); background-color: #cda95a }
`;
  const animation = `${animationKeyframes} 2s ease-in-out infinite`;

  return (
    <Box as={motion.div} animation={animation} {...rest}>
      {children}
    </Box>
  );
}
