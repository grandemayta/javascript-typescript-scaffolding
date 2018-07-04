const httpWrapper = async url => {
  let response = await fetch(url);
  return response.json();
};

export default httpWrapper;
