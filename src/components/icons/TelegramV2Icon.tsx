import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {};

export function TelegramV2Icon(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 39 38"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.8"
        d="m13.575 19.262 13.143 11.923a1.136 1.136 0 0 0 1.131.242c.193-.064.366-.178.503-.332s.233-.342.278-.546l5.498-24.731a1.24 1.24 0 0 0-.03-.646 1.2 1.2 0 0 0-.347-.537 1.137 1.137 0 0 0-1.19-.208L5.584 15.35a1.18 1.18 0 0 0-.567.488 1.235 1.235 0 0 0 .124 1.44c.168.193.393.325.64.377zM13.529 19.543l20.628-15.2"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.8"
        d="m20.043 25.412-4.533 4.64a1.136 1.136 0 0 1-1.265.258 1.17 1.17 0 0 1-.52-.438 1.2 1.2 0 0 1-.196-.66v-9.669"
      ></path>
    </svg>
  )
}