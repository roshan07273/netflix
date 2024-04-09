export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  //const isValidName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)/.test(name);

  if (!isEmailValid) return "Invalid email Try another email!";
  if (!isPasswordValid) return "Invalid password Try another password!";
  //if (!isValidName) return "Invalid name Try another name!";
  return null;
};
