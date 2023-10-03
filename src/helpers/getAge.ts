export const formatAge = (dateString: any) => {
  const from = dateString.split('/');
  const birthdateTimeStamp = new Date(from[2], from[1] - 1, from[0]);
  const cur = new Date();
  const diff = cur.getTime() - birthdateTimeStamp.getTime();
  const currentAge = Math.floor(diff / 31557600000);
  if (currentAge) {
    return currentAge;
  }
};
