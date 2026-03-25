type Props = {
  theme: string
  size?: number
}

export function ThemeIcon({ theme, size = 24 }: Props) {
  if (theme === 'light') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" width={size} height={size} aria-hidden="true">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v3 M12 19v3 M2 12h3 M19 12h3 M4.93 4.93l2.12 2.12 M16.95 16.95l2.12 2.12 M19.07 4.93l-2.12 2.12 M7.05 16.95l-2.12 2.12"/>
      </svg>
    )
  }

  if (theme === 'grey') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width={size} height={size} aria-hidden="true">
        <path fill="currentColor" stroke="none" d="M 10.356,16 C 9.7204738,13.042345 11.974847,10.252129 15,10.252129 c 3.025153,0 5.279526,2.790216 4.644,5.747871 L 19.464023,16.510682 17.983825,16.36609 18.092,16 C 18.771615,13.900767 17.206489,11.748995 15,11.748995 c -2.206489,0 -3.771615,2.151772 -3.092,4.251005 l 0.155767,0.367753 -1.491034,0.203705 z"/>
        <path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M15 5v3 M5 15h3 M22 15h3 M7.93 7.93l2.12 2.12 M22.07 7.93l-2.12 2.12"/>
        <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M1 20.75 Q15 16.25 29 20.75"/>
      </svg>
    )
  }

  if (theme === 'dark') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" width={size} height={size} aria-hidden="true">
        <g transform="rotate(15 12 12)">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z"/>
        </g>
      </svg>
    )
  }

  if (theme === 'contrast') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 2 A10 10 0 0 1 12 22 Z" fill="currentColor"/>
      </svg>
    )
  }

  return null
}