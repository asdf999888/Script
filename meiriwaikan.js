{
  "rules" : [
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "user_purchase_status\":1",
      "matchValue" : "user_purchase_status\":\\d",
      "destiontion" : "response",
      "isRegex" : true
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "finished\":true",
      "matchValue" : "finished\":\\w+",
      "destiontion" : "response",
      "isRegex" : true
    }
  ],
  "enabled" : false,
  "name" : "每日外刊",
  "description" : "",
  "locations" : [
    {
      "method" : "GET",
      "scheme" : "https",
      "enabled" : true,
      "port" : 443,
      "query" : "",
      "host" : "dict.eudic.net",
      "path" : "\/jingting\/*"
    }
  ]
}
