"use client";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0A0118] relative">
      {children}
    </div>
  );
};

export default PageLayout;
