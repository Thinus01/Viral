import jwt_decode from 'jwt-decode';

const getUserFromToken = async (token) => {
  try {
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.sub;

    const response = await fetch(`/api/users/${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const userData = await response.json();

    const user = {
      id: userId,
      name: decodedToken.name,
      // Add more user data
      ...userData
    };

    return user;
  } catch (error) {
    console.error('Error decoding token or fetching user data:', error);
    return null;
  }
};

export default getUserFromToken;
