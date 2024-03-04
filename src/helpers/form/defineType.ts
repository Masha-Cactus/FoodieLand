export const defineType = (key: string, isShow = false) => {
  if (key === 'pwd' && !isShow) {
    return 'password';
  }

  if (key === 'matchPwd' && !isShow) {
    return 'password';
  }

  return 'text';
};
