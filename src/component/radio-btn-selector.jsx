import { useState } from "react";

function RadioButtonSelector() {
    const [selectedOption, setSelectedOption] = useState(null); // Store selected ID
    const [showRadios, setShowRadios] = useState(false);
  //   const [isEditing, setIsEditing] = useState(false);
  
    const options = [
      { id: 1, label: 'Green' },
      { id: 2, label: 'Red' },
      { id: 3, label: 'Blue' },
      { id: 4, label: 'Yellow' },
    ];
  
    const handleRadioChange = (id) => {
      setSelectedOption(id);
    };
  
    const handleSave = () => {
      setShowRadios(false);
      // setIsEditing(true);
    };
  
    const handleEdit = () => {
      setShowRadios(true);
      // setIsEditing(false);
    };
  
    return (
      <div className="container mx-auto ">
        {showRadios ? (
          <div className="bg-white shadow-md p-6">
             <h2 className="text-black/50 font-bold text-base pb-4 -mt-3">Select Favourite Color:</h2>
            <div className="grid grid-cols-2 gap-4">
              {options.map((option) => (
                <label key={option.id} className="flex items-center">
                  <input
                    type="radio"
                    value={option.id}
                    checked={selectedOption === option.id}
                    onChange={() => handleRadioChange(option.id)}
                    className="mr-2 h-4 w-4 rounded-full border border-gray-300" 
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
            <button
              onClick={handleSave}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="bg-white shadow-md p-6">
            <p className='text-black/50 font-bold text-base pb-3 -mt-3'>Your Favourite Color:</p>
            <p className="text-lg text-black/95 font-semibold">
              {selectedOption ? options.find(opt => opt.id === selectedOption).label : "Color Not Selected"}
            </p>
            <button
              onClick={handleEdit}
              className="mt-4 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    );
  }
  
  export default RadioButtonSelector;
  