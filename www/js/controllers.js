angular.module('starter.controllers', ['restangular', 'ionic-timepicker' ,'ionicLazyLoad'])

    .controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout, Restangular) {
        // Form data for the login modal
        $scope.loginData = {};
        $scope.isExpanded = false;
        $scope.hasHeaderFabLeft = false;
        $scope.hasHeaderFabRight = false;

        var navIcons = document.getElementsByClassName('ion-navicon');
        for (var i = 0; i < navIcons.length; i++) {
            navIcons.addEventListener('click', function () {
                this.classList.toggle('active');
            });
        }

        ////////////////////////////////////////
        // Layout Methods
        ////////////////////////////////////////

        $scope.hideNavBar = function () {
            document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
        };

        $scope.showNavBar = function () {
            document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
        };

        $scope.noHeader = function () {
            var content = document.getElementsByTagName('ion-content');
            for (var i = 0; i < content.length; i++) {
                if (content[i].classList.contains('has-header')) {
                    content[i].classList.toggle('has-header');
                }
            }
        };

        $scope.setExpanded = function (bool) {
            $scope.isExpanded = bool;
        };

        $scope.setHeaderFab = function (location) {
            var hasHeaderFabLeft = false;
            var hasHeaderFabRight = false;

            switch (location) {
                case 'left':
                    hasHeaderFabLeft = true;
                    break;
                case 'right':
                    hasHeaderFabRight = true;
                    break;
            }

            $scope.hasHeaderFabLeft = hasHeaderFabLeft;
            $scope.hasHeaderFabRight = hasHeaderFabRight;
        };

        $scope.hasHeader = function () {
            var content = document.getElementsByTagName('ion-content');
            for (var i = 0; i < content.length; i++) {
                if (!content[i].classList.contains('has-header')) {
                    content[i].classList.toggle('has-header');
                }
            }

        };

        $scope.hideHeader = function () {
            $scope.hideNavBar();
            $scope.noHeader();
        };

        $scope.showHeader = function () {
            $scope.showNavBar();
            $scope.hasHeader();
        };

        $scope.clearFabs = function () {
            var fabs = document.getElementsByClassName('button-fab');
            if (fabs.length && fabs.length > 1) {
                fabs[0].remove();
            }
        };
    })

    .controller('LoginCtrl', function ($scope, $state, $timeout, $stateParams, $ionicModal, Restangular, apiFactory) {

    })

    .controller('RegistrationCtrl', function ($scope, $stateParams, $timeout, apiFactory) {

    })

    .controller('InformationCtrl', function ($scope, $stateParams, $timeout, apiFactory) {

        $scope.informations = apiFactory.mockInformation();
        $scope.items = [
            { id: 1, name: 'Cat 1', image: 'http://i.huffpost.com/gen/964776/images/o-CATS-KILL-BILLIONS-facebook.jpg' },
            { id: 2, name: 'Cat 2', image: 'http://i.huffpost.com/gen/964776/images/o-CATS-KILL-BILLIONS-facebook.jpg' },
            { id: 3, name: 'Cat 3', image: 'http://i.huffpost.com/gen/964776/images/o-CATS-KILL-BILLIONS-facebook.jpg' },
            { id: 4, name: 'Cat 4', image: 'http://i.huffpost.com/gen/964776/images/o-CATS-KILL-BILLIONS-facebook.jpg' },
            { id: 5, name: 'Cat 5', image: 'http://i.huffpost.com/gen/964776/images/o-CATS-KILL-BILLIONS-facebook.jpg' },
            { id: 6, name: 'Cat 6', image: 'http://i.huffpost.com/gen/964776/images/o-CATS-KILL-BILLIONS-facebook.jpg' },
            { id: 7, name: 'Cat 7', image: 'http://i.huffpost.com/gen/964776/images/o-CATS-KILL-BILLIONS-facebook.jpg' },
            { id: 8, name: 'Cat 8', image: 'http://i.huffpost.com/gen/964776/images/o-CATS-KILL-BILLIONS-facebook.jpg' },
            { id: 9, name: 'Cat 9', image: 'http://i.huffpost.com/gen/964776/images/o-CATS-KILL-BILLIONS-facebook.jpg' },
            { id: 10, name: 'Cat 10', image: 'http://i.huffpost.com/gen/964776/images/o-CATS-KILL-BILLIONS-facebook.jpg' },
            { id: 11, name: 'Cat 11', image: 'http://i.huffpost.com/gen/964776/images/o-CATS-KILL-BILLIONS-facebook.jpg' }
        ];


    })

    .controller('TournamentsCtrl', function ($scope, $stateParams, $timeout, apiFactory) {

        $scope.items = apiFactory.mockTournaments();
        console.log($scope.items);

    })

    .controller('TournamentDetailsCtrl', function ($scope, $stateParams, $timeout, apiFactory) {

        $scope.details = apiFactory.mockTournamentDetails();

    });