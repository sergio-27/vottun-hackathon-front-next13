import React from "react";

// Define la interfaz para las props
interface CommunityCardProps {
  image: string;
  title: string;
  description: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="flex justify-center">
    <div className="my-4 flex self-center w-[90%] overflow-hidden rounded-lg bg-gray-800 text-white">
      <img src={image} alt={title} className="h-24 w-24 object-cover" />
      <div className="px-8 py-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
    </div>
  );
};

export default CommunityCard;
