import React, { useState } from "react";
import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
  console.log(file);
  return (
    <div className="filepicker-container">
      {file !== "" && (
        <div className="flex justify-start">
          <button className="" onClick={() => setFile("")}>
            ←
          </button>
        </div>
      )}
      {file === "" ? (
        <div className="flex-1 flex flex-col justify-center">
          <p className="my-2 text-center font-semibold text-gray-800 text-sm">
            Select an image :
          </p>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label
            className="mx-auto filepicker-label bg-white/70 "
            htmlFor="file-upload"
          >
            Upload Image
          </label>
        </div>
      ) : (
        <div className="mb-3 flex-1 flex flex-col justify-center">
          <img
            src={URL.createObjectURL(file)}
            className="max-w-[64px] max-h-[64px] mx-auto mb-6 shadow-xl"
          />
          <p className="mb-2 text-center font-semibold text-gray-800 text-sm">
            Apply as :
          </p>
          <div className="flex flex-wrap gap-3">
            <CustomButton
              type="outline"
              title="Logo"
              handleClick={() => readFile("logo")}
              customeStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="Full"
              handleClick={() => readFile("full")}
              customeStyles="text-xs"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilePicker;
