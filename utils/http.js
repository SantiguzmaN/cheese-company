export const http = params => {
  const { url, method, body } = { ...params };

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };

  return fetch(url, { method, headers, body }).then(response => {
    if (!response.ok) {
      return Promise.reject(response);
    } else {
      return response.json().then(res => res.data);
    }
  });
};
