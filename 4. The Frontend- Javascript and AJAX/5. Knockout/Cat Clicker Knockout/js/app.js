var ViewModel = function(){
	var self = this;
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Tabby");
	this.imgSrc = ko.observable("img/434164568_fea0ad4013_z.jpg");

	this.levels = ko.computed(function(){
		if (self.clickCount() < 20) {
			return "infant";
		}
		if (self.clickCount() < 50) {
			return "teen";
		} else {
			return "adult";
		}
	})



	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());