import { useState } from "react";

const PrivacyToggle = () => {
  const [isPrivate, setIsPrivate] = useState(true);

  console.log(isPrivate);
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium">Private Account</span>

      <div
        onClick={() => setIsPrivate(prev => !prev)}
        className={`w-12 h-6 flex items-center rounded-md p-1 cursor-pointer transition-colors duration-300 ${
          isPrivate ? 'bg-blue-500' : 'bg-gray-300'
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${
            isPrivate ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </div>
    </div>
  );
};


export default PrivacyToggle