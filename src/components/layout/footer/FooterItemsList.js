import React from 'react';
import { STYColumnContainer } from '../../shared/Container';
import Label from '../../shared/Label';

const FooterItemsList = ({ title, items, color }) => {
  console.log('color', color);
  console.log('items', items);
  return (
    <STYColumnContainer gap={30}>
      <Label fontFamily="syncopate" fontSize={15} style={{ marginBottom: 10 }}>
        {title}
      </Label>

      {items.map((item, i) => (
        <Label key={i} color={color} fontSize={13}>
          {item.text}
        </Label>
      ))}
    </STYColumnContainer>
  );
};

export default FooterItemsList;
