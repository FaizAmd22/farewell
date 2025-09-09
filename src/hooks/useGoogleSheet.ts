import { useState, useEffect } from 'react';

const useGoogleSheets = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
    const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
    const RANGE = 'Form Responses 1!A1:G105';

    console.log("API_KEY :", API_KEY);
    console.log("SHEET_ID :", SHEET_ID);


    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);

            if (!API_KEY || !SHEET_ID) {
                throw new Error('Missing API_KEY or SHEET_ID in environment variables');
            }

            const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
            console.log('Fetching from URL:', url);

            const response = await fetch(url);

            if (!response.ok) {
                const errorData = await response.json();
                console.error('API Error:', errorData);

                if (errorData.error) {
                    throw new Error(`Google Sheets API Error: ${errorData.error.message}`);
                }
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const result = await response.json();
            console.log('API Response:', result);

            if (result.values && result.values.length > 0) {
                const headers = result.values[0];
                const rows = result.values.slice(1).filter((row: any) => row && row.length > 0);

                const formattedData = rows.map((row: any) => {
                    const obj: any = {};
                    headers.forEach((header: any, index: any) => {
                        obj[header] = row[index] || '';
                    });
                    return obj;
                });

                setData(formattedData);
            } else {
                setData([]);
            }
        } catch (err: any) {
            console.error('Fetch error:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        data,
        loading,
        error,
        refetch: fetchData
    };
};

export default useGoogleSheets;