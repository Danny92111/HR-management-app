export const formatAge = (dateString: any) => {
  var from = dateString.split('/');
  var birthdateTimeStamp = new Date(from[2], from[1] - 1, from[0]);
  var cur = new Date();
  var diff = cur.getTime() - birthdateTimeStamp.getTime();
  var currentAge = Math.floor(diff / 31557600000);
  return currentAge;
};
