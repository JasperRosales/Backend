


export const test = async (req, res) => {
  try {
    const jpn = await fetch("https://restcountries.com/v3.1/name/japan");
    const kr = await fetch("https://restcountries.com/v3.1/name/korea");
    const th = await fetch("https://restcountries.com/v3.1/name/thailand");

    const dataJ = await jpn.json();
    const dataK = await kr.json();
    const dataT = await th.json();

    const arr = [dataJ, dataK, dataT];

    res.json(arr);
    
  } catch (error) {
    console.error("Error fetching or processing data:", error);
    res.status(500).json({ error: "Failed to fetch data from the API." });
  }
};

export const data = async (req, res) =>{
   try {
    res.json({"Message":"I am done with this world"});
    
  } catch (error) {
    console.error("Error fetching or processing data:", error);
    res.status(500).json({ error: "Failed to fetch data from the API." });
  }
}