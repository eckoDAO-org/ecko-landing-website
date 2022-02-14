import React from 'react';
import { FlexContainer } from '../../shared/Container';
import Label from '../../shared/Label';

const FooterItemsList = ({ title, items, color, children }) => {
  return (
    <FlexContainer className="column" columnGap={30} gap={30}>
      <Label fontFamily="syncopate" fontSize={15} style={{ marginBottom: 10 }}>
        {title}
      </Label>
      {children ||
        items.map((item, i) =>
          item?.href ? (
            <a href={item.href} target={item?.target}>
              <Label key={i} color={color} fontSize={13}>
                {item.text}
              </Label>
            </a>
          ) : (
            <Label key={i} color={color} fontSize={13}>
              {item.text}
            </Label>
          )
        )}
    </FlexContainer>
  );
};

export default FooterItemsList;
