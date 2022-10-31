let url = `SubTemplateId=0&mono@widget0="xyz"&mono@SOQ=0&q1=1&q2=2&mono@EOQ=0&mono@SOQ=1&q1=1&q2=2&mono@EOQ=1&mono@widget1="ABC"&UTMparam1="UTM1"&UTMparam2="UTM2"`;

let getWidgetQueryParams = (search_url) => {
  var result = search_url.match(/mono@SOQ(.*?)&mono@EOQ=(.*?)[^&](.*?)/g);
  url = search_url.replace(/&mono@SOQ(.*?)&mono@EOQ=(.*?)&(.*?)/g, "");
  console.log(`\nWidget query params = ${result}\n`);
  return url;
};

let getWidgetParams = (search_url) => {
  var result = search_url.match(/mono@widget(.*?)[^&](.*?)"(.*?)"/g);
  url = search_url.replace(/&mono@widget(.*?)&(.*?)"(.*?)"/g, "");
  console.log(`Widget params = ${result}\n`);
  return url;
};

let getWorkspaceParams = (search_url) => {
  var result = search_url.split("&");
  console.log(`Workspace params = ${result}\n`);
};

url = getWidgetQueryParams(url);
url = getWidgetParams(url);
getWorkspaceParams(url);
