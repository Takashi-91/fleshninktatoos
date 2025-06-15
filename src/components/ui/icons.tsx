// components/ui/icons.tsx

import PenTool from '/icons/tattoo1.png';
import Scissors from '/icons/1 (2).png';
import tattooMachine from '/icons/1 (1).png';

export const Icons = {
  TattooMachine: tattooMachine,
  Scissors: Scissors,
  PenTool: PenTool,
};

// Type for props
type IconProps = {
  className?: string;
  alt?: string;
};

export const IconComponents = {
  TattooMachine: ({ className = '', alt = 'Tattoo Machine' }: IconProps) => (
    <img src={Icons.TattooMachine} alt={alt} className={className} />
  ),
};

export const IconComponents2 = {
  Scissors: ({ className = '', alt = 'Scissors' }: IconProps) => (
    <img src={Icons.Scissors} alt={alt} className={className} />
  ),
};

export const IconComponents3 = {
  PenTool: ({ className = '', alt = 'Pen Tool' }: IconProps) => (
    <img src={Icons.PenTool} alt={alt} className={className} />
  ),
};
