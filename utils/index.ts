const fetchApi = async (url: string) => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (!baseUrl) {
        throw new Error('NEXT_PUBLIC_API_BASE_URL is not defined');
      }
      const res = await fetch(`${baseUrl}${url}`);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;  
    }
  }
  
  export default fetchApi;
  