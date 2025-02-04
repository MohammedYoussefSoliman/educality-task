import { SVGProp, icons } from "@/assets/icons";

export type IconType = keyof typeof icons;

type Props = SVGProp & {
  name: IconType;
};

export function Icon({ name, size, color }: Props) {
  const Component = icons[name];

  return <Component size={size || 24} color={color} />;
}
