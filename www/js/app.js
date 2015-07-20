// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.reservationControllers', 'starter.slidecontrollers'])

    .directive('ionMdInput', function () {
        return {
            restrict: 'E',
            transclude: true,
            template: '<input type="text" required>' +
            '<span class="md-highlight"></span>' +
            '<span class="md-bar"></span>' +
            '<label>{{label}}</label>',
            scope: {
                'label': '@'
            }
        }
    })

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .directive('standardTimeNoMeridian', function() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                etime: '=etime'
            },
            template: "<strong>{{stime}}</strong>",
            link: function(scope, elem, attrs) {

                scope.stime = epochParser(scope.etime, 'time');

                function prependZero(param) {
                    if (String(param).length < 2) {
                        return "0" + String(param);
                    }
                    return param;
                }

                function epochParser(val, opType) {
                    if (val === null) {
                        return "00:00";
                    } else {
                        if (opType === 'time') {
                            var hours = parseInt(val / 3600);
                            var minutes = (val / 60) % 60;

                            return (prependZero(hours) + ":" + prependZero(minutes));
                        }
                    }
                }

                scope.$watch('etime', function(newValue, oldValue) {
                    scope.stime = epochParser(scope.etime, 'time');
                });

            }
        };
    })

    .config(function (RestangularProvider) {
        RestangularProvider.setBaseUrl('http://demo7078193.mockable.io/');
    })

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.navBar.alignTitle('left');
    })

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        // Turn off caching for demo simplicity's sake
        $ionicConfigProvider.views.maxCache(0);

        /*
         // Turn off back button text
         $ionicConfigProvider.backButton.previousTitleText(false);
         */

        $stateProvider.state('app', {
            url: '/app',
            abstract: true,
            controller: 'AppCtrl'
        })

            //.state('app.activity', {
            //    url: '/activity',
            //    views: {
            //        'menuContent': {
            //            templateUrl: 'templates/activity.html',
            //            controller: 'ActivityCtrl'
            //        },
            //        'fabContent': {
            //            template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
            //            controller: function ($timeout) {
            //                $timeout(function () {
            //                    document.getElementById('fab-activity').classList.toggle('on');
            //                }, 200);
            //            }
            //        }
            //    }
            //})
            //
            //.state('app.friends', {
            //    url: '/friends',
            //    views: {
            //        'menuContent': {
            //            templateUrl: 'templates/friends.html',
            //            controller: 'FriendsCtrl'
            //        },
            //        'fabContent': {
            //            template: '<button id="fab-friends" class="button button-fab button-fab-top-left expanded button-energized-900 spin"><i class="icon ion-chatbubbles"></i></button>',
            //            controller: function ($timeout) {
            //                $timeout(function () {
            //                    document.getElementById('fab-friends').classList.toggle('on');
            //                }, 900);
            //            }
            //        }
            //    }
            //})
            //
            //.state('app.gallery', {
            //    url: '/gallery',
            //    views: {
            //        'menuContent': {
            //            templateUrl: 'templates/gallery.html',
            //            controller: 'GalleryCtrl'
            //        },
            //        'fabContent': {
            //            template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
            //            controller: function ($timeout) {
            //                $timeout(function () {
            //                    document.getElementById('fab-gallery').classList.toggle('on');
            //                }, 600);
            //            }
            //        }
            //    }
            //})

            .state('app.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl: 'screens/login.html',
                        controller: 'LoginCtrl'
                    },
                    'fabContent': {
                        template: ''
                    }
                }
            })

            .state('app.reservation', {
                url: '/reservation',
                views: {
                    'menuContent': {
                        templateUrl: 'screens/reservation.html',
                        controller: 'ReservationCtrl'
                    },
                    'fabContent': {
                        template: ''
                    }
                }
            })

            .state('app.information', {
                url: '/information',
                views: {
                    'menuContent': {
                        templateUrl: 'screens/information.html',
                        controller: 'InformationCtrl'
                    },
                    'fabContent': {
                        template: ''
                    }
                }
            })

            .state('app.tournaments', {
                url: '/tournaments',
                views: {
                    'menuContent': {
                        templateUrl: 'screens/tournaments.html',
                        controller: 'TournamentsCtrl'
                    },
                    'fabContent': {
                        template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
                        controller: function ($timeout) {
                            /*$timeout(function () {
                             document.getElementById('fab-profile').classList.toggle('on');
                             }, 800);*/
                        }
                    }
                }
            })

            .state('app.tournamentDetails', {
                url: '/tournamentDetails',
                views: {
                    'menuContent': {
                        templateUrl: 'screens/tournamentDetails.html',
                        controller: 'TournamentDetailsCtrl'
                    },
                    'fabContent': {
                        template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
                        controller: function ($timeout) {
                            /*$timeout(function () {
                             document.getElementById('fab-profile').classList.toggle('on');
                             }, 800);*/
                        }
                    }
                }
            })

            .state('app.slidetest', {
                url: '/slidetest',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/slides.html',
                        controller: 'SlidesCtrl'
                    },
                    'fabContent': {
                        template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
                        controller: function ($timeout) {
                            /*$timeout(function () {
                             document.getElementById('fab-profile').classList.toggle('on');
                             }, 800);*/
                        }
                    }
                }
            })

            .state('login', {
                url: '/login',
                templateUrl: 'screens/login.html',
                controller: 'LoginCtrl'
            })

            .state('registration', {
                url: '/registration',
                templateUrl: 'screens/registration.html',
                controller: 'RegistrationCtrl'
            })

            .state('tabs', {
                url: '/tab',
                controller: 'TabsCtrl',
                templateUrl: 'tabs.html'
            })


            .state('tabs.slides', {
                url: '/slides',
                views: {
                    'slides-tab': {
                        templateUrl: 'templates/slides.html',
                        controller: 'SlidesCtrl'
                    }
                }
            })

            .state('tabs.tournaments', {
                url: '/tournaments',
                views: {
                    'tournaments-tab': {
                        templateUrl: 'screens/tournaments.html',
                        controller: 'TournamentsCtrl'
                    }
                }
            })

            .state('tabs.information', {
                url: '/information',
                views: {
                    'information-tab': {
                        templateUrl: 'screens/information.html',
                        controller: 'InformationCtrl'
                    }
                }
            })

        $urlRouterProvider.otherwise("/login");

    });

app.controller('TabsCtrl', function ($scope, $ionicSideMenuDelegate) {

    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    }

});

app.controller('HomeTabCtrl', function ($scope, $ionicSideMenuDelegate) {

});

app.controller('AboutCtrl', function ($scope, $ionicSideMenuDelegate) {
    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    }
});


