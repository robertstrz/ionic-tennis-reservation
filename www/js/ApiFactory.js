angular.module('starter').factory('apiFactory', function () {
    var z = 2;

    var courtReservationJson = [{
        "court_number":"1",
        "status":"opened",
        "court_hours":[
            {
                "user_name":"Damian Wyrwał",
                "from":"12:00",
                "to":"13:30"
            },
            {
                "user_name":"Damian Wyrwał2",
                "from":"13:30",
                "to":"14:30"
            },
            {
                "user_name":"Damian Wyrwał3",
                "from":"14:30",
                "to":"16:30"
            },
            {
                "user_name":"Damian Wyrwał4",
                "from":"16:30",
                "to":"17:30"
            },
            {
                "user_name":"Damian Wyrwał3",
                "from":"17:30",
                "to":"19:00"
            },
            {
                "user_name":"Damian Wyrwał",
                "from":"19:00",
                "to":"20:30"
            },
            {
                "user_name":"Damian Wyrwał",
                "from":"20:30",
                "to":"22:00"
            }
        ]
    }, {
        "court_number":"2",
        "status":"opened",
        "court_hours":[
            {
                "user_name":"Damian Wyrwał11",
                "from":"12:00",
                "to":"13:30"
            },
            {
                "user_name":"Damian Wyrwał12",
                "from":"13:30",
                "to":"14:30"
            },
            {
                "user_name":"Damian Wyrwał13",
                "from":"14:30",
                "to":"16:30"
            },
            {
                "user_name":"Damian Wyrwał14",
                "from":"16:30",
                "to":"17:30"
            },
            {
                "user_name":"Damian Wyrwał13",
                "from":"17:30",
                "to":"19:00"
            },
            {
                "user_name":"Damian Wyrwał1",
                "from":"19:00",
                "to":"20:30"
            },
            {
                "user_name":"Damian Wyrwał1",
                "from":"20:30",
                "to":"22:00"
            }
        ]
    }, {
        "court_number":"3",
        "status":"opened",
        "court_hours":[
            {
                "user_name":"Damian Wyrwał1",
                "from":"12:00",
                "to":"13:30"
            },
            {
                "user_name":"Damian Wyrwał12",
                "from":"13:30",
                "to":"14:30"
            },
            {
                "user_name":"Damian Wyrwał13",
                "from":"14:30",
                "to":"16:30"
            },
            {
                "user_name":"Damian Wyrwał14",
                "from":"16:30",
                "to":"17:30"
            },
            {
                "user_name":"Damian Wyrwał13",
                "from":"17:30",
                "to":"19:00"
            },
            {
                "user_name":"Damian Wyrwał1",
                "from":"19:00",
                "to":"20:30"
            },
            {
                "user_name":"Damian Wyrwał1",
                "from":"20:30",
                "to":"22:00"
            }
        ]
    }];

    return {
        doStuff: function (x) {
            return x * z;
        },
        doMoreStuff: function (y) {
            return y * z;
        },
        mockTournaments: function () {
            return [{
                "city": "Szczecin",
                "date": "26.06.2015",
                "nawierzchnia": "Twarda"
            }, {
                "city": "Poznan",
                "date": "23.06.2015",
                "nawierzchnia": "Ceglana"
            }, {
                "city": "Warszawa",
                "date": "11.04.2015",
                "nawierzchnia": "Ceglana"
            }]
        },
        mockCourtReservation: function() {
            return courtReservationJson;
        }
    }

})