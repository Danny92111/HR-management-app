const URL = 'http://localhost:5000/entries';

export const getEntries = async (): Promise<any> => {
  const data = await fetch(URL);
  const response = await data.json();
  console.log(response);
  return response;
};

export const updateEntry = async () => {
  const fetchEntries = getEntries();
};
