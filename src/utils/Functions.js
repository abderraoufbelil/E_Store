

export const fetchData = async (setData,dataurl) => {
    try {
      const response = await fetch(dataurl); // Assuming data.json is in public folder
      const jsonData = await response.json();
      
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };