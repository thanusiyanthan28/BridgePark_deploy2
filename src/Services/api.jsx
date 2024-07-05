const API_BASE_URL = 'http://bphapi.iykons.com'; 

export async function submitReview(data) {
  const url = `${API_BASE_URL}/api/Review/ReviewCreate`;

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
    console.error('API request failed:', error);
    throw error; 
  }
}

export async function getAllReviews() {
  const url = `${API_BASE_URL}/api/Review/ReviewGetAll`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

export async function updateReviewHelpful(reviewId, data) {
  const url = `${API_BASE_URL}/api/Review/ReviewHelpfulUpdate/${reviewId}`;

  try {
    const response = await fetch(url, {
      method: 'PATCH',
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
    console.error('API request failed:', error);
    throw error;
  }
}

