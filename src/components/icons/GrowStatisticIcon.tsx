import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
};

export function GrowStatisticIcon(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 12"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.898"
        d="M15.467 6.931 7.366 8.185l-.107-3.498-6.395.99"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.898"
        d="m12.844 5.229 2.623 1.703-2.495 2.494"
      ></path>
    </svg>
  );
}