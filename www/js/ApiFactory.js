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
    }, {
        "court_number":"4",
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
                "to":"22:30"
            },
            {
                "user_name":"Damian Wyrwał1",
                "from":"20:30",
                "to":"22:00"
            }
        ]
    }];

    var informationJson = [{
        "id": "5",
        "title": "Agnieszka Radwańska wygrywa",
        "image_url": "http://i.wp.pl/a/f/jpeg/30534/agnieszka_radwanska_ao_650.jpeg"
    },{
        "id": "6",
        "title": "Agnieszka Radwańska wygrywa",
        "image_url": "http://i.wp.pl/a/f/jpeg/30534/agnieszka_radwanska_ao_650.jpeg"
    },{
        "id": "7",
        "title": "Agnieszka Radwańska wygrywa",
        "image_url": "http://i.wp.pl/a/f/jpeg/30534/agnieszka_radwanska_ao_650.jpeg"
    }];

    var informationDetailsJson = {
        "id": "5",
        "title": "Agnieszka Radwańska wygrywa",
        "image_url": "http://i.wp.pl/a/f/jpeg/30534/agnieszka_radwanska_ao_650.jpeg",
        "description": "W minioną sobotę odbył się turniej w Rzymie radwańska wygrała super"
    };

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
                "nawierzchnia": "Twarda",
                "description": "Opis mojego turnieju o puchar prezesa"
            }, {
                "city": "Poznan",
                "date": "23.06.2015",
                "nawierzchnia": "Ceglana,",
                "description": "Opis mojego turnieju asdfladskjf asdf dasf "

            }, {
                "city": "Warszawa",
                "date": "11.04.2015",
                "nawierzchnia": "Ceglana,",
                "description": "Opis mojego turnieju asfdklj sdal;fkj "

            }]
        },
        mockTournamentDetails: function () {
            return {
                "city": "Szczecin",
                "date": "26.06.2015",
                "nawierzchnia": "Twarda",
                "registration_due_date":"25.06.2015",
                "registration_price":"50zł",
                "description":"Turniej o puchar prezesa PP rozgrywany na kortach pocztowca przy politechnice poznańskiej." +
                "Turniej odbędzie się w 3 kategoriach wiekowych Open +35 i + 50"
            }
        },
        mockCourtReservation: function() {
            return courtReservationJson;
        },
        mockInformation: function() {
            return informationJson;
        }
    }

})