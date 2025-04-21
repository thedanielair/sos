import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

export const ArrowIcon = ({ className, ...props }: Props) => (
  <svg
    width="23"
    height="12"
    viewBox="0 0 23 12"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M21.5786 1.83362H1.32422L11.338 10.0027L21.5786 1.83362Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);