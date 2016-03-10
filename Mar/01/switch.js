function Knight(name, regiment) {
	this.name = name;
	this.regiment = regiment;
	switch (regiment) {
		case 1:
			this.weapon = "Broadsword";
			break;
		case 2:
			this.weapon = "Claymore";
			break;
		case 3:
		case 4:
			this.weapon = "Mace";
			break;
		default:
		    alert(name+" has an incorrect regiment.");
	}
}