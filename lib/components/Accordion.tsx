import {
  Accordion,
  AccordionButton,
  AccordionButtonProps,
  AccordionIcon,
  AccordionIconProps,
  AccordionItem,
  AccordionItemProps,
  AccordionPanel,
  AccordionPanelProps,
  AccordionProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import Box from './Box';
import { Heading } from './Typography';

export interface AccordionComponentItem {
  title: string;
  content: ReactNode;
  props?: AccordionItemProps;
  titleProps?: AccordionButtonProps;
  contentProps?: AccordionPanelProps;
  iconProps?: AccordionIconProps;
}

export interface AccordionComponentProps extends AccordionProps {
  items: Array<AccordionComponentItem>;
}

export default function AccordionComponent({
  items,
  ...props
}: AccordionComponentProps) {
  const defaultProps: AccordionProps = {
    allowMultiple: true,
  };
  return (
    <Accordion {...defaultProps} {...props}>
      {items.map((it, index) => (
        <AccordionItem key={index} {...it.props}>
          <Heading>
            <AccordionButton {...it.titleProps}>
              <Box flex={1} textAlign='left'>
                {it.title}
              </Box>
              <AccordionIcon {...it.iconProps} />
            </AccordionButton>
          </Heading>
          <AccordionPanel {...it.contentProps}>{it.content}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
