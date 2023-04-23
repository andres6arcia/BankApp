export const IsPassword = (value: string): boolean => {
  const regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;"'<>,.?/])[A-Za-z\d!@#$%^&*()_\-+={}[\]\\|:;"'<>,.?/]{8,}$/;
  return regex.test(value);
};
