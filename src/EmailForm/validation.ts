export const checkValidation = ({
  isName,
  isEmail,
  isMessage,
  name,
  email,
  message,
}: any): boolean => {
  if (isName && isEmail && isMessage) {
    return !!name && !!email && !!message;
  }

  if (isName && isEmail) {
    return !!name && !!email;
  }

  if (isEmail && isMessage) {
    return !!email && !!message;
  }

  if (isName && isMessage) {
    return !!name && !!message;
  }

  if (isName) {
    return !!name;
  }

  if (isEmail) {
    return !!email;
  }

  if (isMessage) {
    return !!message;
  }

  return true;
};
