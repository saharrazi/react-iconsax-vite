const AlignLeft = ({ type = "linear", size = 24, color = "currentColor", className="" }) => {
  if (type === "bold") {
    return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19.38 15.98v1.04c0 1.59-.6 2.23-2.12 2.23H5.38v-5.5h11.88c1.52 0 2.12.64 2.12 2.23ZM14.38 7.48v1.04c0 1.59-.61 2.23-2.12 2.23H5.38v-5.5h6.88c1.51 0 2.12.64 2.12 2.23Z"
          fill={color}
        ></path>
        <path
          d="M5.38 22c-.41 0-.75-.34-.75-.75V2.75c-.01-.42.33-.75.75-.75s.75.34.75.75v18.5c-.01.41-.34.75-.75.75Z"
          fill={color}
        ></path>
      </svg>
    );
  }
  if (type === "broken") {
    return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5.1 19.25h11.8c1.5 0 2.1-.64 2.1-2.23v-1.04c0-1.59-.6-2.23-2.1-2.23H5.1M5.1 10.75h6.8c1.5 0 2.1-.64 2.1-2.23M5.1 5.25h6.8M5 1.988v20"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }
  if (type === "bulk") {
    return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19.38 15.98v1.04c0 1.59-.6 2.23-2.12 2.23H5.38v-5.5h11.88c1.52 0 2.12.64 2.12 2.23Z"
          fill={color}
        ></path>
        <path
          opacity=".4"
          d="M14.38 7.48v1.04c0 1.59-.61 2.23-2.12 2.23H5.38v-5.5h6.88c1.51 0 2.12.64 2.12 2.23Z"
          fill={color}
        ></path>
        <path
          d="M5.38 22c-.41 0-.75-.34-.75-.75V2.75c-.01-.42.33-.75.75-.75s.75.34.75.75v18.5c-.01.41-.34.75-.75.75Z"
          fill={color}
        ></path>
      </svg>
    );
  }
  if (type === "linear") {
    return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5.1 19.25h11.8c1.5 0 2.1-.64 2.1-2.23v-1.04c0-1.59-.6-2.23-2.1-2.23H5.1M5.1 5.25h6.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23H5.1M5 1.99v20"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }
  if (type === "outline") {
    return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16.9 20H5.1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11.8c1.01 0 1.35-.21 1.35-1.48v-1.04c0-1.27-.34-1.48-1.35-1.48H5.1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11.8c1.92 0 2.85.98 2.85 2.98v1.04c0 2-.93 2.98-2.85 2.98ZM11.9 11.5H5.1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.8c1.01 0 1.35-.21 1.35-1.48V7.48c0-1.27-.34-1.48-1.35-1.48H5.1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.8c1.92 0 2.85.98 2.85 2.98v1.04c0 2-.93 2.98-2.85 2.98Z"
          fill={color}
        ></path>
        <path
          d="M5 22.738c-.41 0-.75-.34-.75-.75v-20c0-.41.34-.75.75-.75s.75.34.75.75v20c0 .41-.34.75-.75.75Z"
          fill={color}
        ></path>
      </svg>
    );
  }
  if (type === "twotone") {
    return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          opacity=".4"
          d="M5.1 19.25h11.8c1.5 0 2.1-.64 2.1-2.23v-1.04c0-1.59-.6-2.23-2.1-2.23H5.1M5.1 5.25h6.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23H5.1"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M5 1.988v20"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }
};

export default AlignLeft;