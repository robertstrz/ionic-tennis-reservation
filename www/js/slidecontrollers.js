angular.module('starter.slidecontrollers', [])

    .controller('SlidesCtrl', function ($scope, $timeout, $ionicSlideBoxDelegate, $ionicPopup, $filter, apiFactory, $ionicPopover, $ionicModal) {

        $scope.slotsFrom = {epochTime: 55800, step: 30, format: 24};
        $scope.slotsTo = {epochTime: 55800, step: 30, format: 24};
        $scope.epochTimeTo = 55800;
        $scope.epochTimeFrom = 55800;
        $scope.timePickerCallbackFrom = function (val) {
            if (typeof (val) === 'undefined') {
                console.log('Time not selected');
            } else {
                console.log('Selected time is : ', val);
                $scope.epochTimeFrom = val;
            }
        };

        $scope.timePickerCallbackTo = function (val) {
            if (typeof (val) === 'undefined') {
                console.log('Time not selected');
            } else {
                console.log('Selected time is : ', val);
                $scope.epochTimeTo = val;
            }
        };

        $scope.courtNumber = 0;

        $ionicModal.fromTemplateUrl('modal/reservation-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.reservationModal = modal;
        });

        $scope.openReservationModal = function () {
            $scope.reservationModal.show();
        };

        $scope.closeReservationModal = function () {
            $scope.reservationModal.hide();
        };

        $scope.$on('$destroy', function () {
            $scope.reservationModal.remove();
        });

        $scope.$on('reservationModal.hidden', function () {
            // Execute action
        });

        $scope.$on('reservationModal.removed', function () {
            // Execute action
        });

        $scope.clickCourtItem = function (courtNumber) {
            $scope.selectedCourt = courtNumber;
            $scope.closeCourtsModal();
        }


        $ionicPopover.fromTemplateUrl('templates/popover.html', {
            scope: $scope,
        }).then(function(popover) {
            $scope.popover = popover;
        });

        $scope.demo = 'ios';
        $scope.setPlatform = function(p) {
            document.body.classList.remove('platform-ios');
            document.body.classList.remove('platform-android');
            document.body.classList.add('platform-' + p);
            $scope.demo = p;
        }

        var getColor = function (nr) {
            return nr % 2 === 0 ? '#8080c5' : '#80b280';
        };

        var makeSlide = function (nr, data) {
            console.log(data);
            return angular.extend(data, {
                nr: nr
            });
        };

        $scope.items = apiFactory.mockTournaments();

        var courtsJsonObject = apiFactory.mockCourtReservation();
        var
            default_slides = [],
            default_slides_indexes = [];
        var q = -1;
        angular.forEach(courtsJsonObject, function (value, key) {
            var courtNumber = parseInt(value.court_number - 1);
            console.log(courtNumber);
            console.log(q);
            this.push(courtNumber);
            //console.log(courtsJsonObject[courtNumber].court_hours);
            default_slides.push(makeSlide(q++, {
                title: 'default slide', get color() {
                    return getColor(this.nr)
                },
                courtHoursItems: courtsJsonObject[courtNumber].court_hours
            }));
        }, default_slides_indexes);

        $scope.slides = angular.copy(default_slides);
        console.log(default_slides);
        $scope.selectedSlide = 0; // initial

        $scope.previous = function () {
            $ionicSlideBoxDelegate.previous();
        };
        $scope.next = function () {
            $ionicSlideBoxDelegate.next();
        };

        $scope.showDetails = function () {
            $ionicPopup.alert({
                title: 'Current Slides',
                subTitle: 'currentIndex is ' + '<b>' + $ionicSlideBoxDelegate.currentIndex() + '</b>',
                template: '<pre>' + $filter('json')($scope.slides) + '</pre>'
            });
        };
        $scope.showDefaultSlides = function () {
            var
                i = $ionicSlideBoxDelegate.currentIndex(),
                previous_index = i === 0 ? 2 : i - 1,
                next_index = i === 2 ? 0 : i + 1;

            angular.copy(default_slides[1], $scope.slides[i]);
            angular.copy(default_slides[0], $scope.slides[previous_index]);
            angular.copy(default_slides[2], $scope.slides[next_index]);
            direction = 0;
            head = $scope.slides[previous_index].nr;
            tail = $scope.slides[next_index].nr;
        };

        var direction = 0;

        $scope.slideChanged = function (i) {
            var
                previous_index = i === 0 ? 2 : i - 1,
                next_index = i === 2 ? 0 : i + 1,
                new_direction = $scope.slides[i].nr > $scope.slides[previous_index].nr ? 1 : -1;

            direction = new_direction;
            $scope.courtNumber = $ionicSlideBoxDelegate.currentIndex();
        };

        var
            head = $scope.slides[0].nr,
            tail = $scope.slides[$scope.slides.length - 1].nr;

    });