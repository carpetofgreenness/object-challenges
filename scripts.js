function Multiplier(num) {
	this.x = 1;
	this.multiply = function(){
		var product = num*this.x;
		this.x = product;
		return product;
	}
	this.getCurrentValue = function(){
		return this.x;
	}
}