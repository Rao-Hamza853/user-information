import { useRef, useState } from "react";

const EditableInput = ({title,defaultVal}) => {
    const [isEditable, setIsEditable] = useState(false);
    const [inputValue, setInputValue] = useState(defaultVal);
    const inputRef = useRef(null);
  
    const handleEdit = () => {
      setIsEditable(true);
      setTimeout(() => inputRef.current?.focus(), 50);
    };
  
    const handleSave = () => {
      setIsEditable(false);
    };
  
    return (
      <div className="bg-white pr-3 pb-2">
          <p className="text-black/50 font-bold text-base pl-5 pt-8 pb-2">{title}</p>
          <div className="flex items-center gap-4 pl-4 pt-">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          readOnly={!isEditable}
          className={`border p-2 rounded-md w-full transition ${
            isEditable ? "border-none outline-none bg-gray-100" : "border-none outline-none text-lg text-black/95 font-semibold bg-gray-50"
          }`}
        />
        {isEditable ? (
          <button
            onClick={handleSave}
            className="px-4 py-2 font-semibold bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="px-4 py-2  text-white font-semibold rounded-md bg-gradient-to-r from-purple-400 to-indigo-500 hover:from-purple-600 hover:to-indigo-700"
          >
            Edit
          </button>
        )}
      </div>
      </div>
    );
  };
  
  export default EditableInput;