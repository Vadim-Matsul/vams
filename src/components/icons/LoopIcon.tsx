import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {};

export function LoopIcon(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M4.828 4.828a6 6 0 1 0 8.486 8.486 6 6 0 0 0-8.486-8.486M11.9 11.9a4 4 0 1 1-5.656-5.656 4 4 0 0 1 5.656 5.656"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M11.9 14.728a1.5 1.5 0 0 1 2.12-2.121l3.536 3.535a1.5 1.5 0 1 1-2.12 2.121zM7.207 10.164a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"
      ></path>
      <path fill="#000" d="M8.207 7.164a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0z"></path>
    </svg>
  )
}