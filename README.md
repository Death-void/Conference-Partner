# Conference-Partner
## Front-end Request:
- [ ] CORS policy in back end
- [ ] set session token in back end
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