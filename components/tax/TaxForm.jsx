"use client";

import React, { useState } from "react";

const TaxForm = ({ onCalculate, loading }) => {
  const [salary, setSalary] = useState("");
  const [error, setError] = useState("");

  
  const formatNumber = (value) => {
    if (!value) return "";
    return Number(value).toLocaleString("en-PK");
  };


  const handleChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, "");

   
    if (!/^\d*$/.test(rawValue)) return;

    setSalary(rawValue);

    if (error) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const numericSalary = Number(salary);

    if (!salary || numericSalary <= 0) {
      setError("Please enter a valid monthly salary.");
      return;
    }

    setError("");
    onCalculate(numericSalary);
  };


  return (
    <form onSubmit={handleSubmit}
      className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-200">
     
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Enter Your Monthly Salary
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Your salary before tax deductions.
        </p>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-slate-700">
          Monthly Salary
        </label>

        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">
            PKR
          </span>

          <input
            type="text"
            placeholder="100,000"
            value={formatNumber(salary)}
            onChange={handleChange}
            className="
              w-full
              h-14
              pl-16
              pr-4
              rounded-xl
              border
              border-slate-300
              bg-white
              text-lg
              focus:outline-none
              focus:ring-4
              focus:ring-blue-100
              focus:border-blue-500
              transition
            "
          />
        </div>

        {error && (
          <p className="mt-2 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>


      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          mt-6
          h-13
          rounded-xl
          bg-blue-600
          text-white
          font-medium
          hover:bg-blue-700
          disabled:opacity-60
          disabled:cursor-not-allowed
          transition
        "
      >
        {loading ? "Calculating..." : "Calculate Tax"}
      </button>
    </form>
  );
};

export default TaxForm;