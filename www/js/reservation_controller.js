angular.module('starter.reservationControllers', [])

    .controller('DaysModalCtrl', function ($scope, $ionicModal, apiFactory) {
        $scope.days = ["Poniedziałek", "Wtorek", "Środa"];

        $scope.showDaysModal = function () {
            $scope.openDayModal();
        }

        $ionicModal.fromTemplateUrl('modal/days.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.courtsModal = modal;
        });

        $scope.openDayModal = function () {
            $scope.courtsModal.show();
        };

        $scope.closeDayModal = function () {
            $scope.courtsModal.hide();
        };

        $scope.$on('$destroy', function () {
            $scope.courtsModal.remove();
        });

        $scope.$on('courtsModal.hidden', function () {
            // Execute action
        });

        $scope.$on('courtsModal.removed', function () {
            // Execute action
        });

        $scope.clickDayItem = function (dayName) {
            $scope.selectedDay = dayName;
            $scope.closeDayModal();
        }


    })
    .controller('CourtsModalCtrl', function ($scope, $ionicModal) {
        $scope.courts = [{"number":"1"}, {"number":"2"}, {"number":"3"}];

        $scope.selectedCourt = $scope.courts[0].number;

        $scope.showCourtsModal = function () {
            $scope.openCourtsModal();
        }

        $ionicModal.fromTemplateUrl('modal/courts.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.courtsModal = modal;
        });

        $scope.openCourtsModal = function () {
            $scope.courtsModal.show();
        };

        $scope.closeCourtsModal = function () {
            $scope.courtsModal.hide();
        };

        $scope.$on('$destroy', function () {
            $scope.courtsModal.remove();
        });

        $scope.$on('courtsModal.hidden', function () {
            // Execute action
        });

        $scope.$on('courtsModal.removed', function () {
            // Execute action
        });

        $scope.clickCourtItem = function (courtNumber) {
            $scope.selectedCourt = courtNumber;
            $scope.closeCourtsModal();
        }
    })
    .controller('ReservationCtrl', function ($scope, $timeout, apiFactory) {

        $scope.reservationItems = apiFactory.mockCourtReservation()[0].court_hours;
        console.log($scope.reservationItem);
        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = false;
        $scope.$parent.setExpanded(false);
        $scope.$parent.setHeaderFab(false);

        $scope.items = apiFactory.mockTournaments();

        // Set Motion
        $timeout(function () {
            ionic.material.motion.slideUp({
                selector: '.slide-up'
            });
        }, 300);

        $timeout(function () {
            ionic.material.motion.fadeSlideInRight({
                startVelocity: 3000
            });
        }, 700);

        // Set Ink
        ionic.material.ink.displayEffect();
    });