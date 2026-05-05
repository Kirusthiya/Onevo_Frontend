let _accessToken: string | null = null;

export const tokenManager = {
  getToken: () => _accessToken || localStorage.getItem('token'),
  setToken: (token: string) => {
    _accessToken = token;
    localStorage.setItem('token', token);
  },
  clearToken: () => {
    _accessToken = null;
    localStorage.removeItem('token');
  },
  isExpiringSoon: () => {
    // Basic implementation - could be enhanced with JWT decoding
    return false;
  }
};
