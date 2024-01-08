import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// type Props = {};
// 5e6af0
const Header = () => {
  const [value, setValue] = useState('');

  const options = [
    'Product Require Document',
    'System Designs',
    // 'Code',
    // 'Test',
    'Api Specification',
    'Competitive analysis',
    // 'Catch Pharases',
    // 'color theme suggestions',
    // 'Social media name',
    // 'Sequence Diagram',
    // 'User Interface',
  ];

  const [data, setData] = useState({
    description: '',
    options: [],
  });

  const handleTextChange = (e: any) => {
    setData({ ...data, description: e.target.value });
  };

  const handleCheckboxChange = (option: string) => {
    setData((prevData: string[]) => {
      if (prevData.options.includes(option)) {
        return {
          ...prevData,
          options: prevData.options.filter(
            (selectedOption) => selectedOption !== option
          ),
        };
      } else {
        return {
          ...prevData,
          options: [...prevData.options, option],
        };
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
        {/* <textarea
          className="p-3 w-full rounded-md focus:border-none focus:outline-none text-[#c4c4c4] h-[40vh] bg-[#193040] mt-4"
          placeholder="Give a detailed explanation of your product"
          onChange={(e) => handleTextChange(e)}
          resize="none"
        /> */}
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className="p-3 w-full rounded-md text-[#c4c4c4] h-[40vh] bg-[#193040] mt-4"
        />
        <h3 className="font-bold mt-3">Select preferred option</h3>
        <div className="my-2">
          {options.map((i, option) => (
            <div key={option} className="flex gap-2 items-center">
              <input
                type="checkbox"
                name={i}
                checked={data.options.includes(i)}
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
