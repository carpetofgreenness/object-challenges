//1 - multiplier object

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

//2 - photo album object

function Album(albumName) {
	this.albumName = albumName;

	function Photo(albumName, photoString, location) {
		this.albumName = albumName;
		this.photoString = photoString;
		this.location = location;
	}

	this.photos = [];

	this.addPhoto = function(photoString, location) {
		x = new Photo(this.albumName,photoString,location);
		this.photos.push(x);
	}

	this.listPhotos = function() {
		var photoList = "Your photos are: ";
		for (var i = 0; i < this.photos.length-1; i++) {
			photoList += this.photos[i].photoString + ", ";
		}
		photoList += this.photos[this.photos.length-1].photoString;
		return photoList;
	}

	this.getPhoto = function(photoIndex) {
		return this.photos[photoIndex-1];
	}
}

summer = new Album("summer");
summer.addPhoto("pic1","place1");
summer.addPhoto("pic2","place2");
summer.addPhoto("pic3","place3");
console.log(summer.listPhotos());
console.log(summer.getPhoto(1));

//3 - person, teacher, student, school objects

function Person(name, age, city) {
	this.name = name;
	this.age = age;
	this.city = city;
}

function Teacher(title, subject) {
	this.title = title;
	this.subject = subject;
	Person.apply(this, arguments);
}

Teacher.prototype = new Person();

function Student(grade, major) {
	this.grade = grade;
	this.major = major;
	Person.apply(this, arguments);
}

Student.prototype = new Person();

fred = new Person("Fred",22,"Philly");
george = new Teacher("George",32,"NYC");
ron = new Student("Ron",15,"London");
console.log(fred);
console.log(george);
console.log(ron);