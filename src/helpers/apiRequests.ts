const URL = 'http://localhost:5000/entries';

export const getEntries = async (): Promise<any> => {
  const data = await fetch(URL);
  const response = await data.json();
  console.log(response);
  return response;
};

export const updateEntry = async (payload: any) => {
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
  } catch (error) {
    console.log('ERROR');
  }
};
