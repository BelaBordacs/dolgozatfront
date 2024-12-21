import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ingatlanContext = createContext();

export const IngatlanProvider = ({ children }) => {
  const [ingatlanList, setIngatlanList] = useState([]);


 
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost8000/api/ingatlan');
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
    <DataContext.Provider value={{ ingatlanList, error,}}>
      {children}
    </DataContext.Provider>
  );
};