import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/solid";
import React from "react";
import { useRef, useState } from "react";
import { Picker } from "emoji-mart";
// import "emoji-mart/css/emoji-mart.css";

function Input() {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const filePickerRef = useRef(null);
  const addImageToPost = () => {};
  return (
    <div className={"bordder-b border-gray-700 p-3 flex space-x-3 overflow-y"}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYaxT7xh-STW4Ih_qxYxZUyt8QYaNVEmFtsA&usqp=CAU"
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-700">
        <div className={""}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows="2"
            placeholder="What's happening?"
            className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
            style={{
              overflowY: "auto", // Enable scrolling when content exceeds the textarea's height
              scrollbarWidth: "none", // Hide the scrollbar in Firefox
              msOverflowStyle: "none", // Hide the scrollbar in IE/Edge
              "&::-webkit-scrollbar": {
                width: "0", // Hide the scrollbar in WebKit browsers (Safari, Chrome)
              },
            }}
          />

          {selectedFile && (
            <div className="relative">
              <div
                className="absolute w-8 h-8 bg-[#15181c] 
            hover:bg-[#272c26] bg-opacity-75 rounded-full items-center 
            justify-center top-1 left-1 cursor-pointer "
                onClick={() => selectedFile(null)}
              >
                <XIcon className="text-white h-5" />
              </div>
              <img
                src={selectedFile}
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <div className="icon" onClick={() => filePickerRef.current.click()}>
              <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
              <input
                type="file"
                hidden
                onChange={addImageToPost}
                ref={filePickerRef}
              />
            </div>
            <div className="icon rotate-90">
              <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
            </div>
            <div className="icon" onClick={() => setShowEmojis(!setShowEmojis)}>
              <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
            </div>
            <div className="icon">
              <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
            </div>
            {showEmojis && (
              <Picker
                // onSelect={addEmoji}
                style={{
                  position: "absolute",
                  marginTop: "465px",
                  marginLeft: -40,
                  maxWidth: "320px",
                  borderRadius: "20px",
                }}
                theme="dark"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
