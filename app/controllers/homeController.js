angular.module('App.homeController', [])
    .controller('homeIndexController', function ($animate, $scope, $rootScope, $filter, $routeParams, $window, $mdDialog, $uibModal, Home, localStorageService, Storage, $log, ApiKey, User, $timeout) {
		var self = this;
		self.guestHomeData = null;
		self.userHomeData = null;
		self.character = null;
		self.filtered = null;
        self.userId = null;
        self.activeVideo = null;
        self.isLoggedIn = ApiKey.isLoggedIn();

		// enable animations
		$animate.enabled(true);

		if ($routeParams.character === "" || $routeParams.character === "loginsuccess" || $routeParams.character === "logoutsuccess") {
			self.character = 'bubblesu';
		} else {
			self.character = $routeParams.character;
        }

        if ($routeParams.section) {
            $animate.enabled(false);
            $timeout(function(){
                var $target = $('#'+$routeParams.section);
                if ($target.offset() != undefined) {
                    $("body,html").animate({scrollTop: $target.offset().top}, "slow");
                }
            }, 0);
        }

		if ( ApiKey.getApiKey() === false ) {
            var promise = Home.getGuestFilteredData();
            promise.then( function( filteredData ) {
                setFilteredData(filteredData);
                self.activeVideo = self.filtered.App[0];
                // start signup nag coundown
                if ( $scope.index.signupNag === null ) {
                    $scope.index.startSignupNag();
                }
            });
		} else {
            User.getUser().then(
                function ( userData ) {
                    self.userId = userData[1];
                    Home.getUserFilteredData( self.userId ).then(
                        function( filteredData ) {
                            setFilteredData(filteredData);
                            self.activeVideo = self.filtered.App[0];
                        },
                        function ( error ) {
                            $log.error(error);
                            Home.getGuestFilteredData().then( function(filteredData) {
                                setFilteredData(filteredData);
                            });
                        }
                    );
                }
            );
		}

        self.setActiveVideo = function (ev, ob) {
            self.activeVideo = ob;
        };

        self.openKidsMagLinkModal = function (ev) {
            var modalInstance = $uibModal.open({
                templateUrl: 'kidsMagModal.html',
                windowClass: 'kids-mag-modal',
                controller: 'KidsMagModalInstanceCtrl as kidsMagVm'
            });
        };

        function setFilteredData(filteredData) {
            self.filtered = filteredData;
            // get random app index
            self.filtered.randomAppIndex = Math.floor((Math.random() * self.filtered.App.length));
        }
	}).controller('KidsMagModalInstanceCtrl', function ($uibModalInstance) {
        var self = this;
        self.cancel = function() {
             $uibModalInstance.close();
        };
    });
