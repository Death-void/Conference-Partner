# Conference-Partner
## Front-end Request:
- [ ] CORS policy in back end
    - like in mock:
    ```
    var Mock = require("mockjs")
    var express = require("express")
    var router = express.Router();
    
    router.use("/", function (req, res) {
        console.log(req.body);
        //调用mock方法模拟数据

        var data = Mock.mock({
            "code": 200,
            "description": "success",
            "detail": {
                "avatar": "https://wx4.sinaimg.cn/large/b8fbd005gy1gxicusldztj20i20i2glv.jpg",
                "username": "root",
                "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb290IiwiY3JlYXRlZCI6MTcxNjI3NzkxMjYzOCwiZXhwIjoxNzE2ODgyNzEyfQ.IHzp-ww5lCGMqyUiEWNUFFiPzuUlT8Osasu7La53qfivgqL2w9E78Su3Tbbl3zvxW9awrN1obzPP-6urr8RSAQ"
            }
        });

        // Add CORS headers to allow requests from any origin
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, authorization');

        return res.json(data);
    });
    
    module.exports = router;
    ```
- [ ] set session token (authorization) in back end
- [ ] Response data should be in json format
    - /register : {"userName":"string", "password":"string", "institution":"string", "email":"string"} -> {
        "code": 200,
        "description": "success",
        "detail": {
            "avatar": "https://wx4.sinaimg.cn/large/b8fbd005gy1gxicusldztj20i20i2glv.jpg",
            "username": "root",
            "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb290IiwiY3JlYXRlZCI6MTcxNjI3NzkxMjYzOCwiZXhwIjoxNzE2ODgyNzEyfQ.IHzp-ww5lCGMqyUiEWNUFFiPzuUlT8Osasu7La53qfivgqL2w9E78Su3Tbbl3zvxW9awrN1obzPP-6urr8RSAQ"
        }
    }