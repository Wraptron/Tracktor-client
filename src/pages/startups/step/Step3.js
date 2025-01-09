import React from "react";

const FounderStep = ({ formData, handleChange, addFounder, goBack, goNext }) => {
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
                index === 2 ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              {step.icon}
            </div>
            <span
              className={`ml-2 text-sm font-medium ${
                index === 2 ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {step.name}
            </span>
            {index < 3 && <div className="flex-1 h-px bg-gray-300 mx-4"></div>}
          </div>
        ))}
      </div>

      {/* Founder Form */}
      <h2 className="text-lg font-medium text-gray-700 mb-4">Step 3: Founder Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Founder Name */}
        <div>
          <label htmlFor="founder_name" className="block text-sm font-medium text-gray-700">
            Founder Name
          </label>
          <input
            type="text"
            id="founder_name"
            name="founder_name"
            value={formData.founder_name || ""}
            onChange={handleChange}
            placeholder="Enter founder name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="founder_email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="founder_email"
            name="founder_email"
            value={formData.founder_email || ""}
            onChange={handleChange}
            placeholder="Enter email address"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label htmlFor="contact_number" className="block text-sm font-medium text-gray-700">
            Contact Number
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

        {/* Gender */}
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender || ""}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Select gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Student ID */}
        <div>
          <label htmlFor="student_id" className="block text-sm font-medium text-gray-700">
            Student ID
          </label>
          <input
            type="text"
            id="student_id"
            name="student_id"
            value={formData.student_id || ""}
            onChange={handleChange}
            placeholder="Enter student ID"
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
      </div>

      {/* Add Founder Button */}
      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={addFounder}
          className="bg-gray-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Add
        </button>
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
          onClick={goNext}
          className="w-full md:w-32 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FounderStep;
