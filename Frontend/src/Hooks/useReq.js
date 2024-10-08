import axios from 'axios';

export const useReq = (setLoading) => {

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const handleRequest = async (requestType, service, data = null) => {
    setLoading(true);

    try {
      let response;

      switch (requestType) {
        case 'GET':
          response = await axios.get(`${baseUrl}${service}`);
          break;
        case 'POST':
          response = await axios.post(`${baseUrl}${service}`, data);
          break;
        case 'PUT':
          response = await axios.put(`${baseUrl}${service}`, data);
          break;
        case 'DELETE':
          response = await axios.delete(`${baseUrl}${service}`);
          break;
        default:
          throw new Error('Invalid request type');
      }

      return response.data;
    } catch (err) {
      console.log("Request Failed");
    } finally {
      setLoading(false);
    }
  };

  const get = (service) => handleRequest('GET', service);
  const add = (service, data) => handleRequest('POST', service, data);
  const edit = (service, data) => handleRequest('PUT', service, data);
  const remove = (service) => handleRequest('DELETE', service);

  return {
    get,
    add,
    edit,
    remove,
  };
};
