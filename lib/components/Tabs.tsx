import {
  TabsProps,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  TabProps,
  Tabs,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

export interface TabsComponentTab {
  tab: ReactNode;
  props?: TabProps;
}

export interface TabsComponentProps extends Partial<TabsProps> {
  tabs: Array<TabsComponentTab  >;
  panels: ReactNode[];
}

export default function TabsComponent({
  tabs,
  panels,
  ...props
}: TabsComponentProps) {
  const tabDefaultProps: TabProps = {
    _selected: { borderColor: 'green' },
  };
  return (
    <Tabs {...props}>
      <TabList>
        {tabs.map((it, index) => (
          <Tab key={index} {...tabDefaultProps} {...it.props}>
            {it.tab}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {panels.map((it, index) => (
          <TabPanel key={index}>{it}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
