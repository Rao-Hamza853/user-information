import { useState } from "react";

function CheckboxSaver() {
    const [checkedItems, setCheckedItems] = useState([]);
    const [showCheckboxes, setShowCheckboxes] = useState(false);
    // const [isEditing, setIsEditing] = useState(false);
  
    const checkboxes = [
      { id: 1, label: 'Sports' },
      { id: 2, label: 'Music' },
      { id: 3, label: 'Travel' },
      { id: 4, label: 'Reading' },
    ];
  
    const handleCheckboxChange = (id) => {
      const updatedCheckedItems = checkedItems.includes(id)
        ? checkedItems.filter((item) => item !== id)
        : [...checkedItems, id];
  
      setCheckedItems(updatedCheckedItems);
    };
  
    const handleSave = () => {
      setShowCheckboxes(false);
      // setIsEditing(true);
    };
  
    const handleEdit = () => {
      setShowCheckboxes(true);
      // setIsEditing(false);
    };
  
    return (
      <div className="container mx-auto">
        {showCheckboxes ? (
          <div className="bg-white shadow-md p-6">
            <h2 className="text-black/50 font-bold text-base pb-4 pt-1">Select Your Interests:</h2>
          <div className="grid grid-cols-2 gap-4">
            {checkboxes.map((checkbox) => (
              <label key={checkbox.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={checkedItems.includes(checkbox.id)}
                  onChange={() => handleCheckboxChange(checkbox.id)}
                  className="mr-2 h-4 w-4 rounded border border-gray-300"
                />
                <span className="text-gray-800">{checkbox.label}</span>
              </label>
            ))}
             </div>
            <button onClick={handleSave} className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Save</button>
          </div>
        ) : (
          <div className="bg-white shadow-md p-6">
            <p className='text-black/50 font-bold text-base pb-3 pt-1'>Your Interests:</p>
            {
              checkedItems.length === 0 ? <p className="text-lg text-black/95 font-semibold">Interest Not Selected</p> : null
            }
            <p className="text-lg text-black/95 font-semibold">{checkedItems.map(id => checkboxes.find(cb => cb.id === id).label).join(', ')}</p>
            <button onClick={handleEdit} className="mt-4 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded">Edit</button>
          </div>
        )}
      </div>
    );
  }
  
  export default CheckboxSaver;
  