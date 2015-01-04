(function() {
    'use strict';

    angular
    .module('cvma.appFrame')
    .directive('appFrame', appFrame);

    /* @ngInject */
    function appFrame ($document, $location) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'E',
            controller: 'AppFrameCtrl',
            controllerAs: 'vm',
            templateUrl: '/components/appFrame/appFrame.html',
            transclude: true
        };
        return directive;

        function link(scope, element, attrs) {
            var _menuItems;

            var init = function() {
                $document.bind('click', function() {
                    closeAllMenuItems();
                });

                $document.bind('click', function() {
                    scope.$apply(function() {
                        if (scope.showNav && !scope.openingNav) {
                            scope.toggleMenu();
                        }
                        scope.openingNav = false;
                    });
                });

                if (scope.vm.intcAppFrame.nav && scope.vm.intcAppFrame.nav.autoHighlightActiveItems) {
                    highlightActiveItems();
                    scope.$on('$locationChangeSuccess', function(event, args) {
                        highlightActiveItems();
                    });
                };
            };

            scope.$watch('vm.intcAppFrame.theme', function(newVal, oldVal) {
                if (scope.vm.intcAppFrame) {
                    selectTheme(scope.vm.intcAppFrame.theme);
                }
            });

            scope.$watch('vm.intcAppFrame.mobileTheme', function(newVal, oldVal) {
                if (scope.vm.intcAppFrame) {
                    selectMobileNavAnimation(scope.vm.intcAppFrame.mobileNavAnimation);
                }
            });

            scope.handleClick = function(item) {
                if (!item) return;

                if(item.onClick) {
                    scope.$eval(item.onClick);
                }

                // if(item.navigateTo) {
                //      $location.path(item.navigateTo);
                // }
            }


            scope.toggleMenu = function() {
                if (!scope.showNav) {
                    scope.openingNav = true;
                }

                scope.showNav = !scope.showNav;
            };

            scope.toggleSubMenu = function($event) {
                var el = angular.element($event.target).parent();
                if (el.prop("tagName").toLowerCase() != 'li') {
                    el = el.parent();
                };
                var items = el.parent().children();
                _menuItems = items;
                closeAllMenuItems(el);

                el.toggleClass('open');

                $event.stopPropagation();
            };

            scope.openSearch = function($event) {
                var el = angular.element($event.target).parent();
                if (el.prop("tagName").toLowerCase() != 'div') {
                    el = el.parent();
                };
                el.toggleClass('open');
            }

            scope.searchFocus = function($event) {
                $event.stopPropagation();
            }

            scope.handleSearch = function(config) {
                if (config && config.onSearch) {
                    scope.$eval(config.onSearch);
                }
                else {
                    $location.path('search/' + scope.globalSearchQuery);
                }
            }



            ///////////// HELPERS //////////////////
            var closeAllMenuItems = function(excludedElement) {
                if (!_menuItems) return true;

                for (var i = 0; i < _menuItems.length; i++) {
                    var item = angular.element(_menuItems[i]);
                    if (!excludedElement || item.html() !== excludedElement.html()) {
                        item.removeClass('open');
                    }
                }
            };

            var selectTheme = function(themeClass) {
                var body = angular.element($document[0].body);

                body.removeClass('kinked');
                body.removeClass('semiStyle');
                body.removeClass('itdz');

                body.addClass(themeClass);
            }

            var selectMobileNavAnimation = function(theme) {
                var body = angular.element($document[0].body);

                body.removeClass('mobile-nav-slide');

                if(theme) {
                    var themeClass = 'mobile-nav-' + theme;

                    body.addClass(themeClass);
                }
            }

            var highlightActiveItems = function() {
                var currentPage = $location.path();
                var items = scope.vm.intcAppFrame.nav.items;

                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    item.active = false;

                    if ((item.title == 'Home' || item.title == 'home') && currentPage == '/') {
                        item.active = true;
                    }
                    else if (currentPage != '/' && item.href && endsWith(item.href, currentPage)) {
                        item.active = true;
                    };

                    if (item.subItems && item.subItems.length) {
                        for (var s = 0; s < item.subItems.length; s++) {
                            var subItem = item.subItems[s];
                            subItem.active = false;

                            if (currentPage != '/' && subItem.href && endsWith(subItem.href, currentPage)) {
                                item.active = true;
                                subItem.active = true;
                            };
                        };
                    };
                };                             
            }

            // http://stackoverflow.com/a/2548133
            var endsWith = function(str, suffix) {
                return str.indexOf(suffix, str.length - suffix.length) !== -1;
            };

            init();
        }
    }
})();