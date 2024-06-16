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
    url:
    /conferences/visit/topTen
    payload:
    None
    response:
    [
        {
            "id": 2,
            "name": "Conference on Neural Information Processing Systems",
            "website": "http://neurips.cc",
            "abbreviation": "NeurIPS",
            "callForPapers": "Call for papers details...",
            "submissionDeadline": "2024-06-15",
            "notificationDate": "2024-07-15",
            "conferenceDate": "2024-08-15",
            "location": "Montreal, Canada",
            "frequency": 35,
            "viewCount": 2000,
            "isPostponed": false,
            "ccf": "A",
            "core": "A*",
            "qualis": "A1"
        },
        {
            "id": 1,
            "name": "International Conference on Machine Learning",
            "website": "http://icml.cc",
            "abbreviation": "ICML",
            "callForPapers": "Call for papers details...",
            "submissionDeadline": "2024-06-01",
            "notificationDate": "2024-07-01",
            "conferenceDate": "2024-08-01",
            "location": "San Francisco, USA",
            "frequency": 38,
            "viewCount": 1500,
            "isPostponed": false,
            "ccf": "A",
            "core": "A*",
            "qualis": "A1"
        },
        {
            "id": 3,
            "name": "CVPR",
            "website": null,
            "abbreviation": "CVPR",
            "callForPapers": null,
            "submissionDeadline": null,
            "notificationDate": null,
            "conferenceDate": null,
            "location": null,
            "frequency": 0,
            "viewCount": null,
            "isPostponed": null,
            "ccf": null,
            "core": null,
            "qualis": null
        }
    ]
    ```
    - getTopTenConfFollowed -> get all in pages
    ```
    url:
    /follow/conference/topTen
    payload:
    None
    response:
    [
        {
            "conferenceId": 2,
            "followNum": 2,
            "conference": {
                "id": 2,
                "name": "Conference on Neural Information Processing Systems",
                "website": "http://neurips.cc",
                "abbreviation": "NeurIPS",
                "callForPapers": "Call for papers details...    ",
                "submissionDeadline": "2024-06-15",
                "notificationDate": "2024-07-15",
                "conferenceDate": "2024-08-15",
                "location": "Montreal, Canada",
                "frequency": 35,
                "viewCount": 2000,
                "isPostponed": false,
                "ccf": "A",
                "core": "A*",
                "qualis": "A1"
            }
        },
        {
            "conferenceId": 3,
            "followNum": 1,
            "conference": {
                "id": 3,
                "name": "CVPR",
                "website": null,
                "abbreviation": "CVPR",
                "callForPapers": null,
                "submissionDeadline": null,
                "notificationDate": null,
                "conferenceDate": null,
                "location": null,
                "frequency": 0,
                "viewCount": null,
                "isPostponed": null,
                "ccf": null,
                "core": null,
                "qualis": null
            }
        }
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
    url:
    /journals/visit/topTen
    payload:
    None
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
            "issn": "1045-9227",
            "ccf": "A*"
        },
        {
            "id": 1,
            "name": "Journal of Machine Learning Research",
            "website": "http://jmlr.org",
            "specialIssue": "Special Issue on Deep Learning",
            "submissionDeadline": "2024-06-01",
            "impactFactor": "2.567",
            "publisher": "MIT Press",
            "viewCount": 1200,
            "issn": "1533-7928",
            "ccf": "A"
        },
        {
            "id": 3,
            "name": "Journal1",
            "website": null,
            "specialIssue": null,
            "submissionDeadline": null,
            "impactFactor": null,
            "publisher": null,
            "viewCount": null,
            "issn": null,
            "ccf": null
        },
        {
            "id": 4,
            "name": "Journal2",
            "website": null,
            "specialIssue": null,
            "submissionDeadline": null,
            "impactFactor": null,
            "publisher": null,
            "viewCount": null,
            "issn": null,
            "ccf": null
        }
    ]
    ```
    - getTopTenJourFollowed -> get all in pages
    ```
    url:
    /follow/journal/topTen
    payload:
    None
    response:
    [
        {
            "journalId": 1,
            "followNum": 1,
            "journal": {
                "id": 1,
                "name": "Journal of Machine Learning Research",
                "website": "http://jmlr.org",
                "specialIssue": "Special Issue on Deep Learning",
                "submissionDeadline": "2024-06-01",
                "impactFactor": "2.567",
                "publisher": "MIT Press",
                "viewCount": 1200,
                "issn": "1533-7928",
                "ccf": "A"
            }
        },
        {
            "journalId": 2,
            "followNum": 1,
            "journal": {
                "id": 2,
                "name": "IEEE Transactions on Neural Networks",
                "website": "https://www.ieee.org",
                "specialIssue": "Special Issue on Reinforcement Learning",
                "submissionDeadline": "2024-07-01",
                "impactFactor": "5.123",
                "publisher": "IEEE",
                "viewCount": 1500,
                "issn": "1045-9227",
                "ccf": "A*"
            }
        }
    ]
    ```
    
    ### 会议页
    - getConfInCall: paging
    url:
    /conferences/getConfInCall/
    payload:
    None
    response:
    [
    	{
    		"id": 2,
    		"name": "Conference on Neural Information Processing Systems",
    		"website": "http://neurips.cc",
    		"abbreviation": "NeurIPS",
    		"callForPapers": "Call for papers details...",
    		"submissionDeadline": "2024-06-15",
    		"notificationDate": "2024-07-15",
    		"conferenceDate": "2024-08-15",
    		"location": "Montreal, Canada",
    		"frequency": 35,
    		"viewCount": 2000,
    		"isPostponed": false,
    		"core": "A*",
    		"ccf": "A",
    		"qualis": "A1"
    	}
    ]
    - getConfFinished: paging
    url:
    conferences/getConfFinished
    payload:
    None
    response:
    [
    	{
    		"id": 1,
    		"name": "International Conference on Machine Learning",
    		"website": "http://icml.cc",
    		"abbreviation": "ICML",
    		"callForPapers": "Call for papers details...",
    		"submissionDeadline": "2024-06-01",
    		"notificationDate": "2024-07-01",
    		"conferenceDate": "2024-08-01",
    		"location": "San Francisco, USA",
    		"frequency": 38,
    		"viewCount": 1500,
    		"isPostponed": false,
    		"ccf": "A",
    		"qualis": "A1",
    		"core": "A*"
    	},
    	{
    		"id": 3,
    		"name": "Test Conference",
    		"website": "http://testconference.com",
    		"abbreviation": "TC",
    		"callForPapers": "Call for papers details...",
    		"submissionDeadline": "2024-05-31",
    		"notificationDate": "2024-06-30",
    		"conferenceDate": "2024-07-31",
    		"location": "San Francisco, USA",
    		"frequency": 1,
    		"viewCount": 100,
    		"isPostponed": false,
    		"ccf": "A",
    		"qualis": "A1",
    		"core": "A*"
    	}
    ]

    - getConfJoiners

    -getConfFollowers

    ### 期刊页
    - getJourInCall: 
    url:
    /journals/getJourInCall
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
    - getJourFinished: 
    url:
    journals/getJourFinished
    response:
    [
    	{
    		"id": 1,
    		"name": "Journal of Machine Learning Research",
    		"website": "http://jmlr.org",
    		"specialIssue": "Special Issue on Deep Learning",
    		"submissionDeadline": "2024-06-01",
    		"impactFactor": "2.567",
    		"publisher": "MIT Press",
    		"viewCount": 1200,
    		"ccf": "A",
    		"issn": "1533-7928"
    	},
    	{
    		"id": 3,
    		"name": "Updated Journal",
    		"website": "http://testjournal.com",
    		"specialIssue": "Special Issue on AI",
    		"submissionDeadline": "2024-05-31",
    		"impactFactor": "5.123",
    		"publisher": "Test Publisher",
    		"viewCount": 100,
    		"ccf": "A",
    		"issn": "1234-5678"
    	},
    	{
    		"id": 5,
    		"name": "Test Journal",
    		"website": "http://testjournal.com",
    		"specialIssue": "Special Issue on AI",
    		"submissionDeadline": "2024-05-31",
    		"impactFactor": "5.123",
    		"publisher": "Test Publisher",
    		"viewCount": 100,
    		"ccf": "A",
    		"issn": "1234-5678"
    	},
    	{
    		"id": 6,
    		"name": "Test Journal",
    		"website": "http://testjournal.com",
    		"specialIssue": "Special Issue on AI",
    		"submissionDeadline": "2024-05-31",
    		"impactFactor": "5.123",
    		"publisher": "Test Publisher",
    		"viewCount": 100,
    		"ccf": "A",
    		"issn": "1234-5678"
    	}
    ]
    
    ### 用户页
    - getUserInfo
    url：
    /getUserInfo/{id}
    response:
    {
    	"id": 1,
    	"userName": "user1",
    	"email": "user1@example.com",
    	"password": "$2a$10$7Q7rOd/oPSK.s4xPSzX5M.3Ow5nxjG5B27I7jN5XBItuMwBsSlD6a",
    	"institution": "Institution1",
    	"registrationTime": "2023-05-29T10:00:00"
    }
    - updateUserInfo
    url:
    /updateUserInfo/{id}
    payload:
    {
    	"id": 1,
    	"userName": "user1",
    	"email": "user1@example.com",
    	"password": "123",
    	"institution": "Institution1",
    	"registrationTime": "2023-05-29T10:00:00"
    }
    response:
    {
    	"id": 1,
    	"userName": "user1",
    	"email": "user1@example.com",
    	"password": "$2a$10$nIMYpQTmKrVikZb9zzrKmO0djhbzZKMlMxra6SXnQfsN9dVRMCqGK",
    	"institution": "Institution1",
    	"registrationTime": "2023-05-29T10:00:00"
    }


    ### 具体会议页
    - getFollowersInConference
    url:
    /conferences/getFollowersInConference
    payload:
    conferenceId Long
    response:
    [
    	1
    ]
    - getJoinersInConference
    url:
    /conferences/getJoinersInConference
    payload:
    conferenceId Long
    response:
    [
    	1
    ]
    ### 具体期刊页
    - getFollowersInJournal
    url:
    /journals/getFollowersInJournal
    payload:
    journalId Long
    response:
    [
    	1
    ]




    # issues
    register api:  response token: res.data.token like in login api

    会议信息➕：followCount, joinCount， lastModifiedDate : "2024-06-10",
    lastModifiedUser : "Dou Sun",