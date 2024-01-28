import { api } from "@/utils/api";
import React, { useState, ChangeEvent } from "react";

interface CheckboxState {
  proposals: boolean;
  commonPayments: boolean;
  customDesign: boolean;
}

const createCommunity: React.FC = () => {
  const [communityName, setCommunityName] = useState<string>("");
  const [communityDescription, setCommunityDescription] = useState<string>("");
  const [communityImageUrl, setCommunityImageUrl] = useState<string>("");
  const [checkboxState, setCheckboxState] = useState<CheckboxState>({
    proposals: false,
    commonPayments: false,
    customDesign: false,
  });
  const {data, refetch} = api.community.deploySmartContract.useQuery({
        ownerId: 1,
        communityName: communityName,
        hasProposal: true,
        hasSharedPayment: true,
        hasChat: true,
        adminAddress: "0x8d081aB34302C1406eD86e49a0beD17802223039", //address deivid
  }, {enabled: false});

  const {mutate: createdCommunityLocal} = api.community.createCommunity.useMutation({});


  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckboxState({
      ...checkboxState,
      [event.target.name]: event.target.checked,
    });
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    if (name === "communityName") {
      setCommunityName(value);
    } else if (name === "communityDescription") {
      setCommunityDescription(value);
    } else if (name === "communityImageUrl") {
      setCommunityImageUrl(value);
    }
  };

  const createCommunityHandler = async () => {
    const response = await refetch();
    console.log("createCommunityHandler", response.data);


    createdCommunityLocal({
      ownerId: 1,
      communityName: communityName,
      communityDescription: communityDescription,
      communityImageUrl: communityImageUrl,
      contractAddress: "0x000",
      hasProposal: true,
      hasSharedPayment: true,
      hasChat: true,
      adminAddress: "0x8d081aB34302C1406eD86e49a0beD17802223039",
    });

    

    console.log({
      checkboxState,
      communityName,
      communityDescription,
      communityImageUrl,
    });
  };

  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-start bg-slate-950 p-4">
      <div className="container mx-auto min-h-screen bg-slate-950 p-4">
        <h2 className="my-5 text-3xl font-extrabold text-blue-500 sm:text-4xl md:text-5xl">
          Create Your Community
        </h2>
        <input
          type="text"
          name="communityName"
          value={communityName}
          onChange={handleInputChange}
          placeholder="Community Name"
          className="mb-4 w-full rounded-md border-2 p-4 text-black"
        />
        <textarea
          name="communityDescription"
          value={communityDescription}
          onChange={handleInputChange}
          placeholder="Community Description"
          className="mb-4 w-full rounded-md border-2 p-4 text-black"
          rows={3}
        />
        <input
          type="text"
          name="communityImageUrl"
          value={communityImageUrl}
          onChange={handleInputChange}
          placeholder="Community Image URL"
          className="mb-4 w-full  rounded-md border-2 p-4 text-black"
        />
        <h2 className="my-5 text-3xl font-extrabold text-blue-500 sm:text-4xl md:text-5xl">
          Which solutions do you want to use?
        </h2>
        <div className="my-10 flex w-full flex-col items-center justify-center text-white">
          <label className="mb-4 block w-72 rounded-md border-2 p-4">
            <input
              type="checkbox"
              name="proposals"
              checked={checkboxState.proposals}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Chat
          </label>
          <label className="mb-4 block w-72 rounded-md border-2 p-4">
            <input
              type="checkbox"
              name="commonPayments"
              checked={checkboxState.commonPayments}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Votaciones
          </label>
          <label className="mb-4 block w-72 rounded-md border-2 p-4">
            <input
              type="checkbox"
              name="customDesign"
              checked={checkboxState.customDesign}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Propuestas
          </label>
        </div>
        <button
          className="focus:shadow-outline mb-4 mt-10 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="button"
          onClick={createCommunityHandler}
        >
          CREATE
        </button>
      </div>
    </div>
  );
};

export default createCommunity;
