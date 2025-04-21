import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

export const TriangleIcon = ({ className, ...props }: Props) => (
  <svg
    width="23"
    height="12"
    viewBox="0 0 23 12"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M1.32422 0.833984L21.5786 0.833984L11.338 10.0027L1.32422 0.833984Z"
      fill="currentColor"
    />
  </svg>
);