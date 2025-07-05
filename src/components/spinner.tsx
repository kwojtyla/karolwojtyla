export const LoadingSpinner = ({ size = "sm", color = "default" }) => {
  const sizeClasses = {
    xs: "w-3 h-3 border-[1px]",
    sm: "w-4 h-4 border-[1px]",
    md: "w-6 h-6 border-2",
    lg: "w-8 h-8 border-2",
    xl: "w-12 h-12 border-[3px]",
    "2xl": "w-16 h-16 border-4",
  };

  const colorClasses = {
    default: "border-primary-foreground border-t-transparent",
    blue: "border-blue-500 border-t-transparent",
    green: "border-green-500 border-t-transparent",
    red: "border-red-500 border-t-transparent",
    purple: "border-purple-500 border-t-transparent",
    yellow: "border-yellow-500 border-t-transparent",
    gray: "border-gray-500 border-t-transparent",
  };

  return (
    <div
      className={` ${sizeClasses[size as keyof typeof sizeClasses]} ${colorClasses[color as keyof typeof colorClasses]} animate-spin rounded-full`}
    />
  );
};
