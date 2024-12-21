import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const IngatlanContext = createContext();

export const IngatlanProvider = ({ children }) => {
  const [form, setForm] = useState([]);


 
  const fetchData = async () => {
    try {
      const response = await axios.get('');
      setIngatlanList(response.data);
      console.log(ingatlanList)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <IngatlanContext.Provider value={{ form, error}}>
      {children}
    </IngatlanContext.Provider>
  );
};