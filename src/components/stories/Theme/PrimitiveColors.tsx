import React from 'react';
import { ColorPalette, ColorItem } from '@storybook/blocks';
import primitiveColors from '../../../styles/primitiveColors';

export const PrimitiveColors = () => {
  return (
    <>
      <ColorPalette>
        <ColorItem title="White" subtitle="White" colors={primitiveColors.white} />
      </ColorPalette>

      {/* <ColorPalette>
        <ColorItem title="Sea" subtitle="Sea" colors={primitiveColors.sea} />
      </ColorPalette>

      <ColorPalette>
        <ColorItem title="Sumi" subtitle="Sumi" colors={primitiveColors.sumi} />
      </ColorPalette>

      <ColorPalette>
        <ColorItem title="Forest" subtitle="Forest" colors={primitiveColors.forest} />
      </ColorPalette>

      <ColorPalette>
        <ColorItem title="Wood" subtitle="Wood" colors={primitiveColors.wood} />
      </ColorPalette>

      <ColorPalette>
        <ColorItem title="Sun" subtitle="Sun" colors={primitiveColors.sun} />
      </ColorPalette> */}
    </>
  );
};
