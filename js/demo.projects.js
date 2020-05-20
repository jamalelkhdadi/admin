// Define a new module for our app
var app = angular.module("instantSearch", []);
// Create the instant search filter
app.filter('searchFor', function () {
    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchFor:searchString)
    return function (arr, searchString) {
        if (!searchString) {
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function (item) {
            if (item.title.toLowerCase().indexOf(searchString) !== -1) {
                result.push(item);
            }
        });
        return result;
    };
});
// The controller
function InstantSearchController($scope) {
    // The data model. These items would normally be requested via AJAX,
    // but are hardcoded here for simplicity. See the next example for
    // tips on using AJAX.
    $scope.items = [
        {
            url: 'myprojects/ag-grid/index.html',
            title: 'ag-grid',
            description: 'ag-grid',
            image: 'svg/ag-grid.svg'
        },
        {
            url: 'myprojects/Animation-cub/index.html',
            title: 'animation',
            description: 'Animation cub',
            image: 'svg/animationcub.jpg'
        },
        {
            url: 'myprojects/chart/index.html',
            title: 'chart',
            description: 'charts'
        },
        {
            url: 'myprojects/emperes/index.html',
            title: 'Emperes',
            description: 'Play Emperes',
            image: 'svg/emperes.png'
        },
        {
            url: 'myprojects/gameFOOT/index.html',
            title: 'Football',
            description: 'Play game foot',
            image: 'svg/gamefoot.jpg'
        },
        {
            url: 'myprojects/git/index.html',
            title: 'GIT',
            description: 'Learn git',
            image: 'svg/git.svg'
        },
        {
            url: 'myprojects/LOGIN/login.html',
            title: 'LOGIN',
            description: 'Page login',
            image: 'svg/login.svg'
        },
        {
            url: 'myprojects/player/responsivesinglplayer.html',
            title: 'player',
            description: 'responsive singl player and 2 players',
            image: 'svg/player.svg'
        },
        {
            url: 'myprojects/playerMP3/index.html',
            title: 'MP3 player',
            description: 'Play music mp3',
            image: 'svg/mp3player.jpg'
        },
        {
            url: 'myprojects/SketchPAD/index.html',
            title: 'Sketch pad',
            description: 'Sketch Pad',
            image: 'svg/sketchpad.jpg'
        }
    ];
}