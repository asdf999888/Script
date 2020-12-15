/*Quantumult X 脚本:
每日外刊内解锁内容
[rewrite_local]
# meiriwaikan 精听解锁 （by zzz）
^https?:\/\/dict\.eudic\.net\/jingting\/* url script-response-body https://cdn.jsdelivr.net/gh/asdf999888/Script@patch-1/meiriwaikan.js
[mitm]
hostname = dict.eudic.net,
*/

let obj = text.parse($response.body);
obj.data.user_purchase_status = 1;
obj.data.finished = true;
$done({body: text.stringify(obj)});
