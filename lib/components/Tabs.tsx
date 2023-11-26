import {
  TabsProps as ChakraTabsProps,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  TabProps,
  Tabs,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface TabsProps extends Partial<ChakraTabsProps> {
  tabs: {
    tab: ReactNode;
    props?: TabProps;
  }[];
  panels: ReactNode[];
}

export default function TabsComponent(props: TabsProps) {
  return (
    <Tabs {...props}>
      <TabList>
        {props.tabs.map((it, index) => (
          <Tab key={index} {...it.props}>
            {it.tab}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {props.panels.map((it, index) => (
          <TabPanel key={index}>{it}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
