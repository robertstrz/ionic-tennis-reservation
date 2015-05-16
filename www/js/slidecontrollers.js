angular.module('starter.slidecontrollers', [])

    .controller('SlidesCtrl', function ($scope, $timeout, $ionicSlideBoxDelegate, $ionicPopup, $filter, apiFactory) {
        var getColor = function (nr) {
            return nr % 2 === 0 ? '#8080c5' : '#80b280';
        };

        var makeSlide = function (nr, data) {
            console.log(data);
            return angular.extend(data, {
                nr: nr
            });
        };
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
        var courtsJsonObject = apiFactory.mockCourtReservation();
        //$scope.reservationItems = apiFactory.mockCourtReservation()[1].court_hours;
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
        default_slides_indexes = [ -1,0 ,1];

        $scope.slides = angular.copy(default_slides);
        $scope.selectedSlide = 1; // initial

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
            console.log("I: ", i);
            var
                previous_index = i === 0 ? 2 : i - 1,
                next_index = i === 2 ? 0 : i + 1,
                new_direction = $scope.slides[i].nr > $scope.slides[previous_index].nr ? 1 : -1;

            angular.copy(
                createSlideData(new_direction, direction),
                $scope.slides[new_direction > 0 ? next_index : previous_index]
            );
            direction = new_direction;
        };

        var
            head = $scope.slides[0].nr,
            tail = $scope.slides[$scope.slides.length - 1].nr;

        var createSlideData = function (new_direction, old_direction) {
            var nr;
            if (new_direction === 1) {
                tail = old_direction < 0 ? head + 3 : tail + 1;
            }
            else {
                head = old_direction > 0 ? tail - 3 : head - 1;
            }

            nr = new_direction === 1 ? tail : head;
            if (default_slides_indexes.indexOf(nr) !== -1) {
                return default_slides[default_slides_indexes.indexOf(nr)];
            };
            console.log("Number ", nr);
            return makeSlide(nr, {
                title: 'generated slide', get color() {
                    return getColor(this.nr)
                }
                //courtHoursItems: courtsJsonObject[1].court_hours
            });
        };

    });