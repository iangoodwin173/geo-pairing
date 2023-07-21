const fetchCityData = async (city) => {
  
  const url = 'https://andruxnet-world-cities-v1.p.rapidapi.com/?query=paris&searchby='+ city;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a49f6167d5msh5efc40b556e9e63p18be73jsn01d6e80b3778',
      'X-RapidAPI-Host': 'andruxnet-world-cities-v1.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
 
export default fetchCityData;
