let body = JSON.parse($response.body);
body = {
 "valid": true,
 "newlyAssociated": true
};
body = JSON.stringify(body)
$done({body})
