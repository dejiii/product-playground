import React from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { availableOptions } from '../data';

type Props = {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  options: Array<string>;
  setOptions: React.Dispatch<React.SetStateAction<Array<string>>>;
};

const Header = ({
  description,
  setDescription,
  options,
  setOptions,
}: Props) => {
  const handleCheckboxChange = (option: string) => {
    setOptions((options: string[]) => {
      if (options.includes(option)) {
        return options.filter((existingOption) => existingOption !== option);
      } else {
        return [...options, option];
      }
    });
  };

  return (
    <aside className="bg-[#09151d] text-white shadow-lg h-[100vh] w-[500px] p-4">
      <div className="container mx-auto px-2 py-[25px]">
        <h2 className="text-5xl font-bold heading">Product Playground</h2>
        <p className="my-3 text-[#d8d8d8]">
          <i>Simplify your product research processs...</i>
        </p>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          placeholder="Enter product details"
          className="w-full rounded-md text-[#c4c4c4] h-[40vh]"
        />
        <h3 className="font-bold mt-[50px]">
          Select preferred option ({`${options.length}/8`})
        </h3>
        <div className="my-2 grid grid-cols-2 gap-3 h-[150px] overflow-y-scroll">
          {availableOptions.map((i, option) => (
            <div key={option} className="flex gap-2 items-center text-xs mb-2">
              <input
                type="checkbox"
                name={i}
                checked={options.includes(i)}
                onChange={() => handleCheckboxChange(i)}
              />
              {i}
            </div>
          ))}
        </div>
        <button className="p-4 bg-[#62b2eb] rounded-md mt-2 w-full font-bold shadow-lg">
          Submit
        </button>
      </div>
    </aside>
  );
};

export default Header;
