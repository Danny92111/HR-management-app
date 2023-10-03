import {entriesAll} from '../context/entriesSlice';
const URL = 'http://localhost:5000/entries';

export const getEntries = async (): Promise<object[]> => {
  const data = await fetch(URL);
  const response = await data.json();
  return response;
};

export const updateEntry = async (payload: entriesAll) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log('POST SUCCESFUL');
    return data;
  } catch (error) {
    console.log(error, 'ERROR');
  }
};
