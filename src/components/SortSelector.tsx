import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  const sortMenuItemsList = [
    { id: crypto.randomUUID(), name: 'Relevance' },
    { id: crypto.randomUUID(), name: 'Date Added' },
    { id: crypto.randomUUID(), name: 'Name' },
    { id: crypto.randomUUID(), name: 'Release Date' },
    { id: crypto.randomUUID(), name: 'Popularity' },
    { id: crypto.randomUUID(), name: 'Average' },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        {sortMenuItemsList.map((list) => (
          <MenuItem key={list.id}>{list.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
