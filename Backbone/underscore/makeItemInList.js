makeItemInList = function (List){
    return function (Item) {
	return _.indexOf(List, Item) !== -1;
    };
};
