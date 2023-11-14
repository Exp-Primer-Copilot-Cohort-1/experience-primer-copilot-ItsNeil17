function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkilsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope:  {
            member: '='
        }
    };
}