import React from "react";

const DescriptionStep = ({ formData, handleChange, handleFileUpload, goBack, handleSubmit }) => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Dropdown for Program */}
      <div className="mb-6">
        <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
          Program
        </label>
        <select
          id="program"
          name="program"
          value={formData.program || ""}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select Program
          </option>
          <option value="Program 1">Program 1</option>
          <option value="Program 2">Program 2</option>
        </select>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-8">
        {[
          { name: "Basic", icon: "!" },
          { name: "Official", icon: "⚙️" },
          { name: "Founder", icon: "👤" },
          { name: "Description", icon: "💬" },
        ].map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-white ${
                index === 3 ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              {step.icon}
            </div>
            <span
              className={`ml-2 text-sm font-medium ${
                index === 3 ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {step.name}
            </span>
            {index < 3 && <div className="flex-1 h-px bg-gray-300 mx-4"></div>}
          </div>
        ))}
      </div>

      {/* Logo Upload */}
      <div className="mb-6">
        <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-1">
          Choose Logo
        </label>
        <div className="flex items-center">
          <input
            type="file"
            id="logo"
            name="logo"
            onChange={handleFileUpload}
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="button"
            className="ml-4 bg-gray-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Upload
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          placeholder="Type here...."
          rows={4}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between">
        <button
          type="button"
          onClick={goBack}
          className="w-full md:w-32 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full md:w-32 bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DescriptionStep;
