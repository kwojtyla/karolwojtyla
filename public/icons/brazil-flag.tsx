import React from "react";

interface BrazilFlagIconProps {
  size?: number;
  className?: string;
}

const BrazilFlag: React.FC<BrazilFlagIconProps> = ({
  size = 32,
  className = "",
}) => {
  return (
    <svg
      width={size || "32px"}
      height={size - 8 || "24px"}
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_270_67941)">
        <rect width="32" height="24" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V24H32V0H0Z"
          fill="#009933"
        />
        <mask
          id="mask0_270_67941"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={32}
          height="24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V24H32V0H0Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_270_67941)">
          <g filter="url(#filter0_d_270_67941)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.9268 3.70404L28.1286 12.2075L15.7608 20.1713L3.80893 12.0427L15.9268 3.70404Z"
              fill="#FFD221"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.9268 3.70404L28.1286 12.2075L15.7608 20.1713L3.80893 12.0427L15.9268 3.70404Z"
              fill="url(#paint0_linear_270_67941)"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 17.2C18.7614 17.2 21 14.9614 21 12.2C21 9.43859 18.7614 7.20001 16 7.20001C13.2386 7.20001 11 9.43859 11 12.2C11 14.9614 13.2386 17.2 16 17.2Z"
            fill="#2E42A5"
          />
          <mask
            id="mask1_270_67941"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="11"
            y="7"
            width="10"
            height="11"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 17.2C18.7614 17.2 21 14.9614 21 12.2C21 9.43859 18.7614 7.20001 16 7.20001C13.2386 7.20001 11 9.43859 11 12.2C11 14.9614 13.2386 17.2 16 17.2Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask1_270_67941)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.38 14.57L14.1566 14.6874L14.1993 14.4387L14.0186 14.2626L14.2683 14.2263L14.38 14L14.4917 14.2263L14.7414 14.2626L14.5607 14.4387L14.6034 14.6874L14.38 14.57Z"
              fill="#F7FCFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.38 14.57L16.1566 14.6874L16.1993 14.4387L16.0186 14.2626L16.2683 14.2263L16.38 14L16.4917 14.2263L16.7414 14.2626L16.5607 14.4387L16.6034 14.6874L16.38 14.57Z"
              fill="#F7FCFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.38 15.77L16.1566 15.8874L16.1993 15.6387L16.0186 15.4626L16.2683 15.4263L16.38 15.2L16.4917 15.4263L16.7414 15.4626L16.5607 15.6387L16.6034 15.8874L16.38 15.77Z"
              fill="#F7FCFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.38 11.57L15.1566 11.6874L15.1993 11.4387L15.0186 11.2626L15.2683 11.2263L15.38 11L15.4917 11.2263L15.7414 11.2626L15.5607 11.4387L15.6034 11.6874L15.38 11.57Z"
              fill="#F7FCFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.38 13.57L15.1566 13.6874L15.1993 13.4387L15.0186 13.2626L15.2683 13.2263L15.38 13L15.4917 13.2263L15.7414 13.2626L15.5607 13.4387L15.6034 13.6874L15.38 13.57Z"
              fill="#F7FCFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.98 12.57L13.7566 12.6874L13.7993 12.4387L13.6186 12.2626L13.8683 12.2263L13.98 12L14.0917 12.2263L14.3414 12.2626L14.1607 12.4387L14.2033 12.6874L13.98 12.57Z"
              fill="#F7FCFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.58 13.37L12.3566 13.4874L12.3993 13.2387L12.2185 13.0626L12.4683 13.0263L12.58 12.8L12.6916 13.0263L12.9414 13.0626L12.7607 13.2387L12.8033 13.4874L12.58 13.37Z"
              fill="#F7FCFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.18 9.96999L16.9567 10.0874L16.9993 9.83871L16.8186 9.66257L17.0684 9.62628L17.18 9.39999L17.2917 9.62628L17.5415 9.66257L17.3607 9.83871L17.4034 10.0874L17.18 9.96999Z"
              fill="#F7FCFF"
            />
            <path
              d="M9.9248 10.9972L10.0752 9.00283C14.8731 9.36462 18.66 10.9422 21.3882 13.7484L19.9542 15.1425C17.5896 12.7103 14.2624 11.3242 9.9248 10.9972Z"
              fill="#F7FCFF"
            />
            <path
              d="M12.2894 10.6028L12.3409 10.1054C15.4339 10.4258 18.0868 11.6105 20.2917 13.6569L19.9516 14.0234C17.8269 12.0514 15.2755 10.9121 12.2894 10.6028Z"
              fill="#009933"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_270_67941"
          x="3.80896"
          y="3.70404"
          width="24.3197"
          height="16.4672"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0313726 0 0 0 0 0.368627 0 0 0 0 0 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_270_67941"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_270_67941"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_270_67941"
          x1="32"
          y1="24"
          x2="32"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC600" />
          <stop offset="1" stopColor="#FFDE42" />
        </linearGradient>
        <clipPath id="clip0_270_67941">
          <rect width="32" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BrazilFlag;
