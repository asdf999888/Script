/*Quantumult X 脚本:
每日外壳内解锁内容
[rewrite_local]
# Xunjie Unlock annual subscriptions （by LTribe）
^https?:\/\/.dict\.eudic\.bet\/jingting\/v\d\/* url script-response-body https://cdn.jsdelivr.net/gh/asdf999888/Script@patch-1/meiriwaikan.js
[mitm]
hostname = dict.eudic.net,
*/

let obj = JSON.parse($response.body);
obj.data.user_purchase_status = 1;
obj.data.finished = true;
$done({body: JSON.stringify(obj)});
