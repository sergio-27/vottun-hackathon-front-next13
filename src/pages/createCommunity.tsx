import { api } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, ChangeEvent } from "react";


interface CheckboxState {
  proposals: boolean;
  commonPayments: boolean;
  chat: boolean;
}

const createCommunity: React.FC = () => {
  const router = useRouter();
  const [communityName, setCommunityName] = useState<string>("");
  const [communityDescription, setCommunityDescription] = useState<string>("");
  const [communityImageUrl, setCommunityImageUrl] = useState<string>("");
  const [checkboxState, setCheckboxState] = useState<CheckboxState>({
    proposals: false,
    commonPayments: false,
    chat: false,
  });
  const {data: deploSmartContractData, refetch} = api.community.deploySmartContract.useQuery({
    adminAddress: "0xB669c0D9eFAe5A923a7d863Eb0A623D35280d7F4",
    communityName: communityName,
    hasChat: checkboxState.chat,
    hasProposal: checkboxState.proposals,
    hasSharedPayment: checkboxState.proposals
  }, {enabled: false});

  const {mutate: createdCommunityLocal} = api.community.createCommunity.useMutation();

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
      contractAddress: response.data.contractAddress,
      hasProposal: checkboxState.proposals,
      hasSharedPayment: checkboxState.commonPayments,
      hasChat: checkboxState.chat,
      adminAddress: "0xB669c0D9eFAe5A923a7d863Eb0A623D35280d7F4",
    });

    router.back();
  };

  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-start bg-slate-950 p-4">
      <div className="container mx-auto min-h-screen bg-slate-950 p-4">
        <h2 className="my-5 text-3xl font-extrabold text-gray-200 sm:text-4xl md:text-5xl">
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
        <h2 className="my-5 text-3xl font-extrabold text-gray-200 sm:text-4xl md:text-5xl">
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
            Voting
          </label>
          <label className="mb-4 block w-72 rounded-md border-2 p-4">
            <input
              type="checkbox"
              name="customDesign"
              checked={checkboxState.chat}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Proposals
          </label>
        </div>
        <button
          className="focus:shadow-outline mb-4 -mt-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="button"
          onClick={createCommunityHandler}
        >
          CREATE
        </button>
        <Link href="/communities" passHref>
          <button className="focus:shadow-outline rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-600 focus:outline-none mx-10">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default createCommunity;

