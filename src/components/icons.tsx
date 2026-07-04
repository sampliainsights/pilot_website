import type { SVGProps } from "react";

/** ALGORI wordmark logo (152×28). Uses currentColor — set text color to theme. */
export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="152" height="28" viewBox="0 0 152 28" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.62136 22.1092H17.3786L19.4175 27.5H25L15.8738 1.5H9.70874L0 27.5H5.58252L7.62136 22.1092ZM12.4762 9.37158L15.5345 17.2908H9.41797L12.4762 9.37158Z" fill="currentColor" />
      <path d="M47 22.3V27.5H28V1.5H33.9406V22.3H47Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M123.97 27.5H130L123.923 17.5771C126.938 16.4321 128.869 13.2358 128.869 9.89633C128.869 5.60275 125.478 1.5 119.872 1.5H108V27.5H113.7V18.1495H118.27L123.97 27.5ZM123.924 9.84873C123.924 11.8524 122.322 13.0928 120.344 13.0928H113.701V6.50928H120.344C122.322 6.50928 123.924 7.84506 123.924 9.84873Z" fill="currentColor" />
      <path d="M139 27.5H134V1.5H139V27.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M144 4.5C144 6.70914 145.791 8.5 148 8.5C150.205 8.48932 151.989 6.7047 152 4.5C152 2.29086 150.209 0.5 148 0.5C145.791 0.5 144 2.29086 144 4.5ZM144.83 4.45101C144.83 2.69986 146.25 1.28028 148.001 1.28028C148.842 1.27898 149.649 1.61262 150.244 2.20753C150.839 2.80244 151.173 3.60968 151.172 4.45101C151.172 6.20216 149.752 7.62174 148.001 7.62174C146.25 7.62174 144.83 6.20216 144.83 4.45101Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M147.128 6.5V5.01377H147.487C147.692 5.01377 147.846 5.01377 147.949 5.10666C148.075 5.23067 148.178 5.37169 148.256 5.52466L148.769 6.5H150L149.385 5.38533C149.302 5.19607 149.18 5.02273 149.026 4.87444C148.924 4.75548 148.778 4.67319 148.615 4.64222C148.856 4.57457 149.069 4.44556 149.231 4.27066C149.382 4.08265 149.454 3.85231 149.436 3.62043C149.452 3.29879 149.3 2.98899 149.026 2.78443C148.641 2.57186 148.193 2.47436 147.744 2.50576H146V6.5H147.128ZM148.103 4.1778C147.96 4.28561 147.775 4.33593 147.59 4.31713V4.36358H147.129V3.3418H147.59C147.847 3.3418 148.001 3.38824 148.103 3.43469C148.206 3.48113 148.257 3.62046 148.257 3.80624C148.27 3.9447 148.213 4.08102 148.103 4.1778Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M78 14C78 21.4558 84.0442 27.5 91.5 27.5C98.9481 27.4813 104.981 21.4481 105 14C105 6.54416 98.9558 0.5 91.5 0.5C84.0442 0.5 78 6.54416 78 14ZM83.8281 13.9998C83.8281 9.76232 87.2633 6.32715 91.5008 6.32715C95.735 6.33517 99.1654 9.76564 99.1734 13.9998C99.1734 18.2373 95.7383 21.6725 91.5008 21.6725C87.2633 21.6725 83.8281 18.2373 83.8281 13.9998Z" fill="currentColor" />
      <path d="M73.3386 13.8696H61.5755V18.7031H66.0162C64.591 20.5244 62.4385 21.59 60.1582 21.6032C56.6787 21.6063 53.6586 19.1491 52.8779 15.6799C52.0971 12.2106 53.7629 8.64955 56.8934 7.09549C60.024 5.54144 63.7887 6.40664 65.9689 9.1812H72.441C70.382 3.62716 65.0061 0.112488 59.215 0.534178C53.4238 0.955868 48.5886 5.21408 47.3191 11.0105C46.0496 16.8069 48.6465 22.769 53.708 25.6788C58.7695 28.5886 65.0972 27.7572 69.2758 23.6332V27.5H74V13.8696H73.3386Z" fill="currentColor" />
    </svg>
  );
}

/** Large decorative "G" outline used in hero (516×516). stroke=currentColor. */
export function HeroGIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 516 516" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path opacity="0.496833" d="M278.474 255.018H277.974V255.518V347.533V348.033H278.474H361.981C334.941 382.093 294.406 401.995 251.491 402.242C185.493 402.3 128.198 355.693 113.385 289.87C98.5715 224.044 130.179 156.486 189.564 127.006C248.945 97.5287 320.358 113.937 361.719 166.573L361.869 166.764H362.112H485.322H486.04L485.791 166.09C446.518 60.1554 343.975 -6.89236 233.5 1.15197C123.026 9.19625 30.7998 90.4254 6.58667 200.981C-17.6262 311.536 31.9011 425.258 128.451 480.763C224.66 536.074 344.852 520.52 424.566 442.58V478.194V515V515.5H425.066H470.033H515H515.5V515V255.518V255.018H515H502.409H278.474Z" stroke="currentColor" />
    </svg>
  );
}

/** Arrow → (36×22). Pair with `group-hover:translate-x-1 transition-transform`. */
export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="36" height="22" viewBox="0 0 36 22" fill="none" {...props}>
      <path d="M24.2969 1.3125L23.6719 1.85938C23.3594 2.25 23.3594 2.79688 23.6719 3.1875L30.2344 9.67188H0.9375C0.390625 9.67188 0 10.1406 0 10.6094V11.3906C0 11.9375 0.390625 12.3281 0.9375 12.3281H30.2344L23.6719 18.8906C23.3594 19.2812 23.3594 19.8281 23.6719 20.2188L24.2969 20.7656C24.6094 21.1562 25.2344 21.1562 25.625 20.7656L34.6875 11.7031C35.0781 11.3125 35.0781 10.7656 34.6875 10.375L25.625 1.3125C25.2344 0.921875 24.6094 0.921875 24.2969 1.3125Z" fill="currentColor" />
    </svg>
  );
}

/** Down/sort arrow (14×22) used in table sort indicator. */
export function SortArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="14" height="22" viewBox="0 0 14 22" fill="none" {...props}>
      <path d="M12.8125 15.125L12.4844 14.75C12.25 14.5625 11.9219 14.5625 11.6875 14.75L7.79688 18.6875V1.0625C7.79688 0.78125 7.51562 0.5 7.23438 0.5H6.76562C6.4375 0.5 6.20312 0.78125 6.20312 1.0625V18.6875L2.26562 14.75C2.03125 14.5625 1.70312 14.5625 1.46875 14.75L1.14062 15.125C0.90625 15.3125 0.90625 15.6875 1.14062 15.875L6.57812 21.3594C6.8125 21.5938 7.14062 21.5938 7.375 21.3594L12.8125 15.875C13.0469 15.6875 13.0469 15.3125 12.8125 15.125Z" fill="currentColor" />
    </svg>
  );
}

export function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/** Solution graphic: The Innovation (148×148). */
export function SolutionInnovation(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="148" height="148" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="148" height="148" fill="white" />
      <rect x="21" y="41" width="86" height="86" fill="url(#innovA)" />
      <rect x="117" y="117" width="86" height="86" transform="rotate(-180 117 117)" fill="url(#innovB)" />
      <defs>
        <linearGradient id="innovA" x1="72.978" y1="55.1758" x2="43.2088" y2="121.802" gradientUnits="userSpaceOnUse">
          <stop />
          <stop offset="1" stopColor="#5E5E5E" />
        </linearGradient>
        <linearGradient id="innovB" x1="193.54" y1="123.88" x2="123.02" y2="203" gradientUnits="userSpaceOnUse">
          <stop offset="0.138319" stopColor="#00DEAA" />
          <stop offset="1" stopColor="#00DEAA" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Solution graphic: The Switch (148×148). */
export function SolutionSwitch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="148" height="148" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="148" height="148" fill="white" />
      <circle cx="74.1735" cy="73.9259" r="42.4371" fill="url(#switchA)" />
      <path d="M74.1474 16.9999C62.8447 16.9999 51.7958 20.3515 42.3979 26.631C33.0001 32.9104 25.6753 41.8356 21.35 52.278C17.0246 62.7203 15.8929 74.2108 18.0979 85.2963C20.303 96.3819 25.7458 106.565 33.738 114.557C41.7302 122.549 51.9129 127.992 62.9985 130.197C74.084 132.402 85.5745 131.27 96.0168 126.945C106.459 122.619 115.384 115.295 121.664 105.897C127.943 96.499 131.295 85.4501 131.295 74.1474L74.1474 74.1474L74.1474 16.9999Z" fill="url(#switchB)" />
      <defs>
        <linearGradient id="switchA" x1="83.034" y1="45.479" x2="53.6544" y2="111.233" gradientUnits="userSpaceOnUse">
          <stop />
          <stop offset="1" stopColor="#5E5E5E" />
        </linearGradient>
        <linearGradient id="switchB" x1="74.1474" y1="140.172" x2="73.6735" y2="-4.07434" gradientUnits="userSpaceOnUse">
          <stop offset="0.0738037" stopColor="#00DEAA" />
          <stop offset="1" stopColor="#00DEAA" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Solution graphic: The Shop (148×148). */
export function SolutionShop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="148" height="148" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="148" height="148" fill="white" />
      <rect x="129.834" y="112.601" width="93.6005" height="93.6005" rx="46.8003" transform="rotate(-180 129.834 112.601)" fill="url(#shopA)" />
      <rect x="28.6152" y="46.2095" width="74.0097" height="74.0097" rx="37.0049" fill="url(#shopB)" />
      <rect x="20.8496" y="75.7754" width="52.2422" height="52.2422" rx="26.1211" transform="rotate(2.02944 20.8496 75.7754)" fill="url(#shopC)" />
      <defs>
        <linearGradient id="shopA" x1="186.406" y1="128.029" x2="154.006" y2="200.544" gradientUnits="userSpaceOnUse">
          <stop />
          <stop offset="1" stopColor="#5E5E5E" />
        </linearGradient>
        <linearGradient id="shopB" x1="94.4839" y1="52.1303" x2="33.7959" y2="120.219" gradientUnits="userSpaceOnUse">
          <stop offset="0.138319" stopColor="#00DEAA" />
          <stop offset="1" stopColor="#00DEAA" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="shopC" x1="67.3451" y1="79.9548" x2="24.5066" y2="128.018" gradientUnits="userSpaceOnUse">
          <stop offset="0.138319" stopColor="#00DEAA" />
          <stop offset="1" stopColor="#00DEAA" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Solution graphic: The Survey (148×148). */
export function SolutionSurvey(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="148" height="148" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="148" height="148" fill="white" />
      <path d="M72.7199 50.4507L136.432 91.7255L72.7199 133L10.9992 91.7255L72.7199 50.4507Z" fill="url(#surveyA)" />
      <path d="M72.7199 32.2251L136.432 73.4999L72.7199 114.775L10.9992 73.4999L72.7199 32.2251Z" fill="url(#surveyB)" />
      <path d="M72.7219 14L136.434 55.2748L72.7219 96.5496L11.0012 55.2748L72.7219 14Z" fill="url(#surveyC)" />
      <defs>
        <linearGradient id="surveyA" x1="120.504" y1="103.518" x2="28.9181" y2="103.518" gradientUnits="userSpaceOnUse">
          <stop offset="0.00787143" stopColor="#00DEAA" />
          <stop offset="0.932116" stopColor="#00DEAA" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="surveyB" x1="115.756" y1="82.1177" x2="35.9604" y2="27.9431" gradientUnits="userSpaceOnUse">
          <stop />
          <stop offset="1" stopColor="#5E5E5E" />
        </linearGradient>
        <linearGradient id="surveyC" x1="120.506" y1="67.0676" x2="28.9201" y2="67.0676" gradientUnits="userSpaceOnUse">
          <stop offset="0.00787143" stopColor="#00DEAA" />
          <stop offset="0.932116" stopColor="#00DEAA" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
