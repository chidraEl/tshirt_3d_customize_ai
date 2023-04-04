import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { logoShirt, stylishShirt } from "../assets";

const AIPicker = ({
  prompt,
  setPrompt,
  generatingImg,
  handlePromptSubmit,
  promptHistory,
  applyPrompt,
}) => {
  const [showHistory, setShowHistory] = useState(false);
  console.log(promptHistory);
  return (
    <>
      <div className="aipicker-container overflow-auto h-full">
        <div className="flex justify-start">
          <button
            className={`text-xs w-full p-1.5 ${
              !showHistory ? "bg-gray-50" : "bg-gray-300 text-gray-500"
            }`}
            onClick={() => setShowHistory(false)}
          >
            New Prompt
          </button>
          <button
            className={`text-xs w-full p-1.5 ${
              !showHistory ? "bg-gray-300 text-gray-500" : "bg-gray-50"
            }`}
            onClick={() => setShowHistory(true)}
          >
            History
          </button>
        </div>

        {!showHistory ? (
          <>
            <textarea
              placeholder="Ask Ai something..."
              rows={5}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="aipicker-textarea"
            />

            <div className="flex flex-wrap gap-1">
              {generatingImg ? (
                <CustomButton
                  type="outline"
                  title={
                    <div className="flex gap-2">
                      <img src="./loading.gif" className="w-5 h-5" />
                      <p className="mt-0.5">Generating Image...</p>
                    </div>
                  }
                  customeStyles="text-xs"
                />
              ) : (
                <>
                  <CustomButton
                    type="outline"
                    title={
                      <div className="flex gap-1">
                        <img src={logoShirt} className="w-6 h-6" />{" "}
                        <p className="flex justify-center flex-col flex-1">
                          Logo
                        </p>
                      </div>
                    }
                    customeStyles="text-xs hover:bg-gray-200"
                    handleClick={() => handlePromptSubmit("logo")}
                  />
                  <CustomButton
                    type="outline"
                    title={
                      <div className="flex gap-1">
                        <img src={stylishShirt} className="w-6 h-6" />
                        <p className="flex justify-center flex-col flex-1">
                          Full
                        </p>
                      </div>
                    }
                    customeStyles="text-xs hover:bg-gray-200"
                    handleClick={() => handlePromptSubmit("full")}
                  />
                </>
              )}
            </div>
          </>
        ) : (
          <>
            {promptHistory.length <= 0 ? (
              <div className="text-gray-600 flex justify-center flex-col text-center text-sm flex-1 gap-3">
                <p className="text-3xl">ⓘ</p>
                <p>You have not started any prompts yet!</p>
              </div>
            ) : (
              <div className="flex flex-col justify-start">
                <div className="flex-1 ">
                  {promptHistory.map((p) => (
                    <button
                      className="text-xs p-0.5 font-medium hover:border-b hover:border-gray-400 text-gray-700 hover:text-gray-950 w-full text-left mb-0.5"
                      key={p[0]}
                      onClick={() => applyPrompt(p)}
                    >
                      {p[0].toString().substring(0, 28)}...
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default AIPicker;
