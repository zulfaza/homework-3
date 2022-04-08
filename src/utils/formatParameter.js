function formatParameter(data) {
  const newObject = { ...data };
  return Object.keys(newObject)
    .map((key) => `${key}=${newObject[key]}`)
    .join('&');
}

export default formatParameter;
