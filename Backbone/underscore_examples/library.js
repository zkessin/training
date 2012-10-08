
window.ZK.filters = {
    ItemInList: function (List){
	return function containsItem(Item){
	    return _.contains(List, Item);   
	};
    },
    ItemNotInList: function (List){
	return function containsItem(Item){
	    return !(_.contains(List, Item));   
	};
    }
};