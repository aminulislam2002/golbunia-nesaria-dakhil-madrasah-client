const useUrl = () => {
  const url = import.meta.env.VITE_SERVER_BASE_URL;
  return [url];
};

export default useUrl;
