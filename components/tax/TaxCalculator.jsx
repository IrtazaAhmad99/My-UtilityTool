"use client";

import React, { useState } from 'react'
import { calculateTax } from "../../services/taxService"
import TaxForm from './TaxForm';
import TaxResult from './TaxResult';


const TaxCalculator = () => {
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleCalculate = async (salary) => {
        try {
            setLoading(true);
            setError("");

            const data = await calculateTax(salary);

            setResults(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="space-y-6">
            <TaxForm
                onCalculate={handleCalculate}
                loading={loading}
            />

            {error && (
                <div className="bg-red-100 text-red-600 p-3 rounded">
                    {error}
                </div>
            )}

            {results && (
                <TaxResult results={results} />
            )}
        </div>
    )
}

export default TaxCalculator