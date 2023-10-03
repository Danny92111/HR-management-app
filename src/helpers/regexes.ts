const INPUT_REGEX_NAME = /^[a-zA-Z ]*$/;
const INPUT_NUMERIC = /^[0-9]*$/;

export const getRegex = (inputType: string): RegExp => {
  switch (inputType) {
    case 'first_name':
      return INPUT_REGEX_NAME;
      break;
    case 'last_name':
      return INPUT_REGEX_NAME;
      break;
    case 'salary':
      return INPUT_NUMERIC;
      break;
    case 'years_of_experience':
      return INPUT_NUMERIC;
      break;
    default:
      return INPUT_REGEX_NAME;
      break;
  }
};
