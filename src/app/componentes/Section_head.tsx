import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionsHead({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-12 mt-12 pl-1">
      {children} ...
    </h2>
  );
}