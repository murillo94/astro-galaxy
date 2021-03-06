import { Heading, Text } from '@magnetis/astro-galaxy-components';
import { IconCalendar, IconPencil } from '@magnetis/astro-galaxy-icons';
import React from 'react';
import { Tab, TabContent, TabItem, TabLabel } from '../index';

describe('Tab', () => {
  it('should render tab component', () => {
    const json = rendererCreateWithTheme(
      <Tab horizontal>
        <TabItem id="tab1" name="tabs" defaultChecked />
        <TabLabel htmlFor="tab1">
          <IconPencil />
          <span>tab 1</span>
        </TabLabel>
        <TabContent>
          <Heading as="h2">tab 1</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod nisi in orci mattis,
            ac iaculis orci lobortis.
          </Text>
          <Text>
            Nullam imperdiet dolor a erat commodo laoreet a ut felis. Nam consequat nisl eu
            efficitur suscipit. Nulla dapibus cursus diam in convallis.
          </Text>
        </TabContent>
        <TabItem id="tab2" name="tabs" />
        <TabLabel htmlFor="tab2">
          <IconCalendar />
          <span>tab 2</span>
        </TabLabel>
        <TabContent>
          <Heading as="h2">tab 2</Heading>
          <Text>
            Integer id pulvinar odio, sit amet accumsan lacus. Pellentesque accumsan sapien eget
            orci auctor, ac pulvinar orci porttitor. Sed fermentum turpis sed egestas commodo. In
            euismod nisi in orci mattis, ac iaculis orci lobortis.
          </Text>
        </TabContent>
      </Tab>
    ).toJSON();

    expect(json).toMatchSnapshot();
  });
});
