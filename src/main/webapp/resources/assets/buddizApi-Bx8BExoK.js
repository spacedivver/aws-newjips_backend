import{B as n}from"./index-1bL1-Tb4.js";const o="/api/buddiz",r={"Content-Type":"multipart/form-data"},c={async getList(t){const{data:e}=await n.get(o,{params:t});return console.log("BOARD GET LIST: ",e),e},async get(t){const{data:e}=await n.get(`${o}/userDetail/${t}`);return console.log("BOARD GET",e),e},async getReview(t){const{data:e}=await n.get(`${o}/review/${t}`);return console.log("REVIEW GET",e),e},async create(t,e){const a=new FormData;a.append("rating",t.rating),a.append("reviewContent",t.reviewContent),console.log("api에서의 content",t.reviewContent);const{data:s}=await n.post(`${o}/reviewAdd/${e}`,a,{headers:r});return console.log("BOARD POST: ",s),s},async reviewWish(t){const e=new FormData;e.append("uno",t),console.log(t);const{data:a}=await n.post(`${o}/reviewWish/${t}`,e,{headers:r});return a}};export{c as a};