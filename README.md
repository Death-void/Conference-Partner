# Conference-Partner
## Front-end Request:
- [x] CORS policy in back end
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

- [] api:
    
    ### 首页
    - searchConfByName
    
    ```
    url:
    /conferences/searchConfByName
    payload:
    string name
    response:
    
    ```
    
    - searchJourByName
    
    ```
    url:
    /journals/searchJourByName
    payload:
    String name
    response:
    [
    	{
    		"id": 2,
    		"name": "IEEE Transactions on Neural Networks",
    		"website": "https://www.ieee.org",
    		"specialIssue": "Special Issue on Reinforcement Learning",
    		"submissionDeadline": "2024-07-01",
    		"impactFactor": "5.123",
    		"publisher": "IEEE",
    		"viewCount": 1500,
    		"ccf": "A*",
    		"issn": "1045-9227"
    	}
    ]
    ```
    
    - searchJourConfByName
    
    ```
    url:
    /api/searchJourConfByName
    payload:
    string name
    response:
    {
    	"conferences": [],
    	"journals": [
    		{
    			"id": 2,
    			"name": "IEEE Transactions on Neural Networks",
    			"website": "https://www.ieee.org",
    			"specialIssue": "Special Issue on Reinforcement Learning",
    			"submissionDeadline": "2024-07-01",
    			"impactFactor": "5.123",
    			"publisher": "IEEE",
    			"viewCount": 1500,
    			"ccf": "A*",
    			"issn": "1045-9227"
    		}
    	]
    }
    ```
    
    - getConferenceNum
    
    ```
    url:
    /conferences/getConferenceNum
    payload:
    None
    response:
    3
    ```
    
    - getJournalNum
    
    ```
    url:
    /journals/getJournalNum
    payload:
    None
    response:
    5
    ```
    
    - getUserNum
    
    ```
    url:
    /user/getUserNum
    payload:
    None
    response:
    3
    ```
    
    - getPageVisitedNum : the number of time that all confrences and journals been visited
    
    ```
    url:
    /api/getPageVisitedNum
    payload:
    None
    response:
    6600
    ```
    
    


    - getTopTenMessages: update conference, update journal, add user (time decreasing order) -> get all in pages
    ```
        const userSourceData = [
        {date : "2024-06-10", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
        {date : "2024-06-09", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
        {date : "2024-06-08", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
        {date : "2024-06-07", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
        {date : "2024-06-06", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
        {date : "2024-06-05", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
        {date : "2024-06-04", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
        {date : "2024-06-03", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
        {date : "2024-06-02", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
        {date : "2024-06-01", type : "更新会议", content : "IEEE APSCON 2025: International IEEE Applied Sensing Conference"},
        ]
    
    ```
    - getTopTenCallForPaper: deadline time increasing order -> get all in pages
    ```
        const userSourceData = [
            {CCF: "", CORE: "c", QUALIS: "", shortName: "AIR", fullName: "International Conference on Artificial Intelligence and Robots", delay: "Delay", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
            {CCF: "a", CORE: "a", QUALIS: "A1", shortName: "ICML", fullName: "International Conference on Machine Learning", delay: "", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
            {CCF: "c", CORE: "b", QUALIS: "B2", shortName: "ICCV", fullName: "International Conference on Computer Vision", delay: "", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
            {CCF: "b", CORE: "c", QUALIS: "B3", shortName: "ICRA", fullName: "International Conference on Robotics and Automation", delay: "Delay", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
            {CCF: "a", CORE: "a", QUALIS: "A2", shortName: "CVPR", fullName: "Computer Vision and Pattern Recognition", delay: "", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
            {CCF: "c", CORE: "b", QUALIS: "B4", shortName: "ICML", fullName: "International Conference on Machine Learning", delay: "", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
            {CCF: "b", CORE: "c", QUALIS: "B5", shortName: "ICCV", fullName: "International Conference on Computer Vision", delay: "Delay", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
            {CCF: "a", CORE: "a", QUALIS: "A1", shortName: "ICRA", fullName: "International Conference on Robotics and Automation", delay: "", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
            {CCF: "c", CORE: "b", QUALIS: "B2", shortName: "CVPR", fullName: "Computer Vision and Pattern Recognition", delay: "", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
            {CCF: "b", CORE: "c", QUALIS: "B3", shortName: "ICML", fullName: "International Conference on Machine Learning", delay: "Delay", deadline: "2024-06-10", notifyDate: "2024-07-10", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
        ]
    ```
    - getTopTenConference: conference time increasing order -> get all in pages
    ```
        const userSourceData = [
            {CCF: "", CORE: "c", QUALIS: "", shortName: "AIR", fullName: "International Conference on Artificial Intelligence and Robots", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
            {CCF: "a", CORE: "a", QUALIS: "A1", shortName: "ICML", fullName: "International Conference on Machine Learning", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
            {CCF: "c", CORE: "b", QUALIS: "B2", shortName: "ICCV", fullName: "International Conference on Computer Vision", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
            {CCF: "b", CORE: "c", QUALIS: "B3", shortName: "ICRA", fullName: "International Conference on Robotics and Automation", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
            {CCF: "a", CORE: "a", QUALIS: "A2", shortName: "CVPR", fullName: "Computer Vision and Pattern Recognition", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
            {CCF: "c", CORE: "b", QUALIS: "B4", shortName: "ICML", fullName: "International Conference on Machine Learning", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
            {CCF: "b", CORE: "c", QUALIS: "B5", shortName: "ICCV", fullName: "International Conference on Computer Vision", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
            {CCF: "a", CORE: "a", QUALIS: "A1", shortName: "ICRA", fullName: "International Conference on Robotics and Automation", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
            {CCF: "c", CORE: "b", QUALIS: "B2", shortName: "CVPR", fullName: "Computer Vision and Pattern Recognition", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
            {CCF: "b", CORE: "c", QUALIS: "B3", shortName: "ICML", fullName: "International Conference on Machine Learning", conferenceDate: "2024-08-10", location: "Shanghai, China", session: 7, visit: 100},
        ]
    ```
    - getTopTenJournal: deadline time increasing order -> get all in pages
    ```
        const userSourceData = [
            {CCF: "", fullName: "IEEE Software", specialIssue: "Creativity in Software Engineering", deadline: "2024-06-10", factor: "2.586", publisher: "IEEE", visit: 100},
            {CCF: "a", fullName: "IEEE Transactions on Software Engineering", specialIssue: "Software Engineering for AI-Driven Systems", deadline: "2024-06-10", factor: "3.286", publisher: "IEEE", visit: 100},
            {CCF: "c", fullName: "IEEE Transactions on Software Engineering", specialIssue: "Software Engineering for AI-Driven Systems", deadline: "2024-06-10", factor: "3.286", publisher: "IEEE", visit: 100},
            {CCF: "b", fullName: "IEEE Transactions on Software Engineering", specialIssue: "Software Engineering for AI-Driven Systems", deadline: "2024-06-10", factor: "3.286", publisher: "IEEE", visit: 100},
            {CCF: "a", fullName: "IEEE Software", specialIssue: "Creativity in Software Engineering", deadline: "2024-06-10", factor: "2.586", publisher: "IEEE", visit: 100},
            {CCF: "c", fullName: "IEEE Transactions on Software Engineering", specialIssue: "Software Engineering for AI-Driven Systems", deadline: "2024-06-10", factor: "3.286", publisher: "IEEE", visit: 100},
            {CCF: "b", fullName: "IEEE Transactions on Software Engineering", specialIssue: "Software Engineering for AI-Driven Systems", deadline: "2024-06-10", factor: "3.286", publisher: "IEEE", visit: 100},
            {CCF: "a", fullName: "IEEE Transactions on Software Engineering", specialIssue: "Software Engineering for AI-Driven Systems", deadline: "2024-06-10", factor: "3.286", publisher: "IEEE", visit: 100},
            {CCF: "c", fullName: "IEEE Software", specialIssue: "Creativity in Software Engineering", deadline: "2024-06-10", factor: "2.586", publisher: "IEEE", visit: 100},
            {CCF: "b", fullName: "IEEE Transactions on Software Engineering", specialIssue: "Software Engineering for AI-Driven Systems", deadline: "2024-06-10", factor: "3.286", publisher: "IEEE", visit: 100},
        ]
    ```
    
    - getTopTenConfVisited -> get all in pages
    ```
        const userSourceData = [
            {shortName: "ICRA", visit: 1423534},
            {shortName: "IROS", visit: 123456},
            {shortName: "CVPR", visit: 123456},
            {shortName: "ICCV", visit: 123456},
            {shortName: "ECCV", visit: 123456},
            {shortName: "ICML", visit: 123456},
            {shortName: "NeurIPS", visit: 123456},
            {shortName: "AAAI", visit: 123456},
            {shortName: "ACL", visit: 123456},
            {shortName: "ICLR", visit: 123456},
        ]
    ```
    - getTopTenConfFollowed -> get all in pages
    ```
        const userSourceData = [
            {shortName: "ICRA", follow: 9999},
            {shortName: "IROS", follow: 123456},
            {shortName: "CVPR", follow: 123456},
            {shortName: "ICCV", follow: 123456},
            {shortName: "ECCV", follow: 123456},
            {shortName: "ICML", follow: 123456},
            {shortName: "NeurIPS", follow: 123456},
            {shortName: "AAAI", follow: 123456},
            {shortName: "ACL", follow: 123456},
            {shortName: "ICRA", follow: 123456},
        ]
    ```
    - getTopTenConfJoined -> get all in pages
    ```
        const userSourceData = [
            {shortName: "ICRA", join: 99},
            {shortName: "IROS", join: 123456},
            {shortName: "CVPR", join: 123456},
            {shortName: "ICCV", join: 123456},
            {shortName: "ECCV", join: 123456},
            {shortName: "ICML", join: 123456},
            {shortName: "NeurIPS", join: 123456},
            {shortName: "AAAI", join: 123456},
            {shortName: "ACL", join: 123456},
            {shortName: "ICLR", join: 123456},
        ]
    ```
    - getTopTenJourVisited -> get all in pages
    ```
        const userSourceData = [
            {shortName: "ICRA", visit: 1423534},
            {shortName: "IROS", visit: 123456},
            {shortName: "CVPR", visit: 123456},
            {shortName: "ICCV", visit: 123456},
            {shortName: "ECCV", visit: 123456},
            {shortName: "ICML", visit: 123456},
            {shortName: "NeurIPS", visit: 123456},
            {shortName: "AAAI", visit: 123456},
            {shortName: "ACL", visit: 123456},
            {shortName: "ICLR", visit: 123456},
        ]
    ```
    - getTopTenJourFollowed -> get all in pages
    ```
        const userSourceData = [
        {shortName: "ICRA", follow: 9999},
        {shortName: "IROS", follow: 123456},
        {shortName: "CVPR", follow: 123456},
        {shortName: "ICCV", follow: 123456},
        {shortName: "ECCV", follow: 123456},
        {shortName: "ICML", follow: 123456},
        {shortName: "NeurIPS", follow: 123456},
        {shortName: "AAAI", follow: 123456},
        {shortName: "ACL", follow: 123456},
        {shortName: "ICRA", follow: 123456},
    ]
    ```
    
    ### 会议页
    - getConfInCall: paging
    - getConfFinished: paging
    
    ### 期刊页
    - getJourInCall: paging
    - getJourNoDeadline: paging
    
    ### 用户页
    - getUserInfo
    - updateUserInfo


    ### 具体会议页
    - getFollowersInConference
    - getJoinersInConference
    
    ### 具体期刊页
    - getFollowersInJournal
