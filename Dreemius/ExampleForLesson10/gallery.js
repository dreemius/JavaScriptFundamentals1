
function Room (name) {
    this.area = 12;
    this.name = name;
} 

Room.prototype = {
	setArea : function (area) {
		this.area = area;
	},
	showArea : function () {
		console.log(this.area);
	},
	showName : function () {
		console.log("Parent: " + this.name);
	}
}

/*
var room = new Room("basement");
room.showArea();
room.showName();
*/

function BusinessRoom (name) {
	Room.apply(this, arguments);
    this.isAvailable = true;
} 

//BusinessRoom.prototype = Object.create(Room.prototype);
//BusinessRoom.prototype -> Room.prototype -> Object.prototype -> null


BusinessRoom.prototype = {
	setAvailability : function (isAvailable) {
		this.isAvailable = isAvailable ;
	},	
	showAvailability : function () {
		console.log(this.isAvailable );
	},
	showName : function () {
		Room.prototype.showName.apply(this, arguments);
		console.log("Child: " + this.name);
	}
};

inheritense(Room, BusinessRoom);

var businessRoom = new BusinessRoom ("hub");
console.dir(businessRoom);			
businessRoom.showAvailability();
businessRoom.showArea();
businessRoom.showName();


function inheritense (parent, child) {
    var tempChild = child.prototype;	

    if (!Object.create) {
        child.prototype = Object.create(parent.prototype);
    } else {
        function F() {};
        F.prototype = parent.prototype;
        child.prototype = new F();
    }

    for(var key in tempChild) {
		if (tempChild.hasOwnProperty(key)){
			child.prototype[key] = tempChild[key];	
		}	
    }
}