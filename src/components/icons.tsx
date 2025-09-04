
import type { SVGProps } from 'react';

export function LinguaLeapLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
      role="img"
      aria-labelledby="lingualeap-logo-title"
    >
      <title id="lingualeap-logo-title">LinguaLeap Logo</title>
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Z"
      />
      <path
        fill="currentColor"
        d="M168 88h-56a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h24v24a8 8 0 0 0 16 0v-24h16a8 8 0 0 0 8-8v-24a32 32 0 0 0-32-32Zm16 48h-16a8 8 0 0 0-8 8v16h-24v-56h40a16 16 0 0 1 16 16Z"
      />
    </svg>
  );
}
