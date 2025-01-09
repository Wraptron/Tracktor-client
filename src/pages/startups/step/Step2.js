import React from "react";

const Step2 = ({ formData, handleChange, goBack, goNext }) => {
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
                index === 1 ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              {step.icon}
            </div>
            <span
              className={`ml-2 text-sm font-medium ${
                index === 1 ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {step.name}
            </span>
            {index < 3 && <div className="flex-1 h-px bg-gray-300 mx-4"></div>}
          </div>
        ))}
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Official Contact Number */}
        <div>
          <label htmlFor="contact_number" className="block text-sm font-medium text-gray-700">
            Official Contact Number
          </label>
          <div className="flex mt-1">
            <span className="inline-flex items-center px-3 bg-gray-200 border border-gray-300 rounded-l-md text-gray-600">
              +91
            </span>
            <input
              type="tel"
              id="contact_number"
              name="contact_number"
              value={formData.contact_number || ""}
              onChange={handleChange}
              placeholder="XXXXX XXXXX"
              className="block w-full p-2 border border-gray-300 rounded-r-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Official Email Address */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Official Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            placeholder="Enter official email address"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Website Link */}
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-gray-700">
            Website Link
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website || ""}
            onChange={handleChange}
            placeholder="Enter website link"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* LinkedIn ID */}
        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
            LinkedIn ID
          </label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin || ""}
            onChange={handleChange}
            placeholder="Enter LinkedIn ID"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Mentor Associated */}
        <div>
          <label htmlFor="mentor" className="block text-sm font-medium text-gray-700">
            Mentor Associated
          </label>
          <select
            id="mentor"
            name="mentor"
            value={formData.mentor || ""}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Select mentor associated
            </option>
            <option value="Mentor 1">Mentor 1</option>
            <option value="Mentor 2">Mentor 2</option>
          </select>
        </div>

        {/* CIN/Registration Number */}
        <div>
          <label htmlFor="cin" className="block text-sm font-medium text-gray-700">
            CIN/Registration Number
          </label>
          <input
            type="text"
            id="cin"
            name="cin"
            value={formData.cin || ""}
            onChange={handleChange}
            placeholder="Enter CIN/Registration Number"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password || ""}
            onChange={handleChange}
            placeholder="Enter password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Buttons */}
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
          onClick={goNext}
          className="w-full md:w-32 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
