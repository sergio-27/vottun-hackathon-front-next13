import React from "react";

interface SolutionCardProps {
  title: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
}) => {
  return (
    <div className="mx-auto my-10 w-1/2 overflow-hidden flex justify-center rounded-lg text-white border-2 border-gray-200 hover:scale-120 transition-transform duration-300 bg-gray-800">
      <div className="px-4 py-2 flex items-center h-24">
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default SolutionCard;
