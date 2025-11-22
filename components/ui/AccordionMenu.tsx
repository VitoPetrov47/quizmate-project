import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

export default function AccordionMenu() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handlePress = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <ScrollView>
      <List.Section>
        <List.Subheader>Menu</List.Subheader>

        <List.Accordion
          title="Category 1"
          left={(props) => <List.Icon {...props} icon="folder" />}
          expanded={expanded === 'cat1'}
          onPress={() => handlePress('cat1')}
        >
          <List.Item title="Item 1" />
          <List.Item title="Item 2" />
        </List.Accordion>

        <List.Accordion
          title="Category 2"
          left={(props) => <List.Icon {...props} icon="folder" />}
          expanded={expanded === 'cat2'}
          onPress={() => handlePress('cat2')}
        >
          <List.Item title="Item A" />
          <List.Item title="Item B" />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
}
