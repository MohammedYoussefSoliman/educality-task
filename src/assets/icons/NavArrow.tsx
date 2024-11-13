import { SVGProp } from "./icon.types";

function NavArrow({ size, color }: SVGProp) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke={color || "#101828"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default NavArrow;
