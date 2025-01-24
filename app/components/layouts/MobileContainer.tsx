"use client";

interface MobileContainerProps {
  children: React.ReactNode;
  className?: string;
}

const MobileContainer = ({
  children,
  className = "",
}: MobileContainerProps) => {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center ${className} md:block`}
    >
      {children}
    </div>
  );
};

export default MobileContainer;
