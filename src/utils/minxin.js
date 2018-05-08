export const GetQueryString = name => {
  const url = new RegExp('(^| &)' + name + '=([^&]*)(&|$)');
  let newUrl = window.location.search.substr(1).match(url);
  if (newUrl != null) {
    return unescape(newUrl[2]);
  } else {
    return false;
  }
};
