const API_BASE_URL = 'http://bphapi.iykons.com'; 

export async function registerApi(data) {
    const url = `${API_BASE_URL}/api/Account/register`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('POST failed:', error);
      throw error; 
    }
  }
  

