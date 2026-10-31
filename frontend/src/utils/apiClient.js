/**
 * API Client utility for making authenticated requests
 * Includes JWT token in Authorization header if available
 */

export const apiClient = {
  /**
   * Make a GET request with optional authentication token
   */
  get: async (url, options = {}) => {
    const headers = buildHeaders(options.headers);
    return fetch(url, { ...options, method: "GET", headers });
  },

  /**
   * Make a POST request with optional authentication token
   */
  post: async (url, data, options = {}) => {
    const headers = buildHeaders(options.headers);
    return fetch(url, {
      ...options,
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
  },

  /**
   * Make a PUT request with optional authentication token
   */
  put: async (url, data, options = {}) => {
    const headers = buildHeaders(options.headers);
    return fetch(url, {
      ...options,
      method: "PUT",
      headers,
      body: JSON.stringify(data),
    });
  },

  /**
   * Make a DELETE request with optional authentication token
   */
  delete: async (url, options = {}) => {
    const headers = buildHeaders(options.headers);
    return fetch(url, { ...options, method: "DELETE", headers });
  },
};

/**
 * Build headers with authentication token if available
 */
function buildHeaders(customHeaders = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...customHeaders,
  };

  // Add JWT token if available
  const token = localStorage.getItem("authToken");
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

/**
 * Check if user is authenticated
 */
export const isAuthenticated = () => {
  const token = localStorage.getItem("authToken");
  const loginTimestamp = localStorage.getItem("loginTimestamp");
  
  if (!token || !loginTimestamp) {
    return false;
  }

  // Check if token is still valid (24 hour expiration)
  const tokenAge = Date.now() - parseInt(loginTimestamp, 10);
  const TOKEN_EXPIRATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  
  if (tokenAge >= TOKEN_EXPIRATION) {
    // Token expired, clear it
    clearAuth();
    return false;
  }

  return true;
};

/**
 * Clear authentication data from localStorage
 */
export const clearAuth = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  localStorage.removeItem("loginTimestamp");
};

/**
 * Get current auth token
 */
export const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

/**
 * Get current username
 */
export const getUsername = () => {
  return localStorage.getItem("username");
};
