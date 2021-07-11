import { http } from "../src";

const _http = new http();

_http.get("https://storage.googleapis.com/audiobook_edrlab/feed.json", {}, 
  async (res) => {

    console.log("test");
    
    res.data = await res.response?.json();
    
    return res;
  }).then(async (data) => {
  console.log(data);

});