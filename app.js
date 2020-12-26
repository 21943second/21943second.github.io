class Value {
		constructor(diamonds=0, embers=0, deggs=0) {
				this.diamonds = diamonds;
				this.embers = embers;
				this.deggs = deggs;
		}

		add(anotherValue) {
				this.diamonds += anotherValue.diamonds;
				this.embers += anotherValue.embers;
				this.deggs += anotherValue.deggs;
		}
		rawValues() {
			return [ this.deggs, this.embers ];
		}
		totalValues() {
			// Convert embers to deggs
			let deggs = this.deggs + Math.floor(this.embers / 4);
			let embers = this.embers % 4;

			// Convert deggs to stegg
			let steggs = Math.floor(deggs / 64);
			deggs %= 64;

			return [ steggs, deggs, embers ];
		}
		print() {
			console.log(`Diamonds: ${this.diamonds}\nEmbers: ${this.embers}\nDeggs: ${this.deggs}`);
		}
}

const getPrice = function(level) {
	       if(level ==  1) { return new Value(3, 0, 0);
	} else if(level <=  3) { return new Value(4, 0, 0);
	} else if(level ==  4) { return new Value(5, 0, 0);
	} else if(level ==  5) { return new Value(7, 0, 0);
	} else if(level <=  7) { return new Value(0, 25, 0);
	} else if(level ==  8) { return new Value(0, 33, 0);
	} else if(level ==  9) { return new Value(0, 35, 0);
	} else if(level == 10) { return new Value(0, 40, 0);
	} else if(level <= 12) { return new Value(0, 48, 0);
	} else if(level == 13) { return new Value(0, 49, 0);
	} else if(level == 14) { return new Value(0, 48, 0);
	} else if(level == 15) { return new Value(0, 47, 0);
	} else if(level == 16) { return new Value(0, 94, 0);
	} else if(level <= 18) { return new Value(0, 93, 0);
	} else if(level <= 20) { return new Value(0, 92, 0);
	} else if(level <= 30) { return new Value(0, 0, 91 - Math.floor((level - 21) / 2)); }
	return "Not good";
}

const totalCost = function(initialLevel, finalLevel) {
	cost = new Value();
	for(let i = initialLevel + 1; i < finalLevel + 1; i++) {
		cost.add(getPrice(i));
	}
	return cost;
}

const updateCost = function() {
	let initialLevel = parseInt(document.getElementById("initial").value);
	let finalLevel = parseInt(document.getElementById("final").value);

	let cost = totalCost(initialLevel, finalLevel);

	let diamonds = cost.diamonds;

	let [ rawDeggs, rawEmbers ] = cost.rawValues();
	document.getElementById("rawDiamonds").innerHTML = diamonds;
	document.getElementById("rawEmbers").innerHTML = rawEmbers;
	document.getElementById("rawDeggs").innerHTML = rawDeggs;

	let [ totalSteggs, totalDeggs, totalEmbers ] = cost.totalValues();
	document.getElementById("totalDiamonds").innerHTML = diamonds;
	document.getElementById("totalEmbers").innerHTML = totalEmbers;
	document.getElementById("totalDeggs").innerHTML = totalDeggs;
	document.getElementById("totalSteggs").innerHTML = totalSteggs;

}
