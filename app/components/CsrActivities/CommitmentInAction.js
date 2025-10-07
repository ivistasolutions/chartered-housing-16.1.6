import Image from "next/image";
import React from "react";
import RecentInitiatives from "./RecentInitiatives";

const CommitmentInAction = () => {
  return (
    <div>
      <div className="container mx-auto text-center">
        <h3 className="text-[#ED1C24] roboto-serif-light mb-5 tracking-wide text-3xl text-center">
          Commitment in Action
        </h3>
      </div>
      <RecentInitiatives />
    </div>
  );
};

export default CommitmentInAction;
