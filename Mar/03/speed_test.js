function SpeedTest(testImplement, testParams, repetitions) {
	this.testImplement = testImplement;
	this.testParams = testParams;
	this.repetitions = repetitions || 10000;
	this.average = 0;
}

SpeedTest.prototype = {
	startTest: function() {
		var begingTime, endTime, sumTimes = 0;
		for (var i = 0, x = this.repetitions; i < x; i++) {
			beginTime = +new Date();
			this.testImplement(this.testParams);
			endTime = +new Date();
			sumTime += endTime - beginTime;
		}
		this.average = sumTime / this.repetitions;
		return console.log("Average execution across" +
			this.repetition + ":" + this.average);
	}
};