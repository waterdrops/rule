let body = $response.body

body = JSON.parse(body)
body['data']["is_vip"] = 1;
body = JSON.stringify(body)
$done({ body })
