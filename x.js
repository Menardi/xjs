(function() {
	var x = {};
	var events, boundNodes, boundValues;

	// Overrides for fields which do not use the "input" event
	var EVENT_TYPES = {
		checkbox: 'change'
	};

	x.VERSION = '0.1.0';

	x.initialize = function() {
		boundNodes = {};

		boundValues = boundValues || { _attributes: {} };

		// Create a DOM element to hang events off
		events = document.createElement('x');

		bind();
	};

	x.reinitialize = function() {
		this.initialize();
	};

	// @TODO: This should return a copy of the object ideally
	x.getAll = function() {
		return boundValues._attributes;
	};

	var onXSet = function(ev) {
		if(boundNodes[ev.type]) {
			for(var i=0; i<boundNodes[ev.type].length; i++) {
				if(typeof boundNodes[ev.type][i].value !== 'undefined') {
					boundNodes[ev.type][i].value = x[ev.type];
				} else {
					boundNodes[ev.type][i].innerHTML = x[ev.type];
				}
			}
		}
	};

	var onXInput = function(ev) {
		var value;

		if(ev.target.type === 'checkbox') {
			value = ev.target.checked;
		} else {
			value = ev.target.value;
		}

		x[getVarFromNode(ev.target)] = value;
	};

	var getNodes = function() {
		return document.querySelectorAll('[x], [data-x]');
	};

	var getVarFromNode = function(node) {
		return (node.attributes.x || node.attributes['data-x']).value;
	};

	var bind = function() {
		var nodes = Array.prototype.slice.call(getNodes());

		nodes.forEach(function(node) {
			var varName = getVarFromNode(node);

			// Not using shorthand here because it will invoke the get on subsequent runs
			if(!boundValues[varName]) {
				boundValues[varName] = '';
			}

			if(!x.hasOwnProperty(varName)) {

				// @TODO: These get and set functions need to be better - there shouldn't be
				// a separate instance for each varName
				Object.defineProperty(x, varName, {
					get: function() {
						return boundValues._attributes[varName];
					},
					set: function(value) {
						// Only do something if the value has changed
						if(boundValues._attributes[varName] !== value) {
							boundValues._attributes[varName] = value;
							events.dispatchEvent(new Event(varName));
						}
					}
				});
			}

			events.addEventListener(varName, onXSet);

			boundNodes[varName] = boundNodes[varName] || [];
			boundNodes[varName].push(node);

			if(typeof node.value !== 'undefined') {
				node.addEventListener(EVENT_TYPES[node.type] || 'input', onXInput);
			}
		});
	};

	this.x = x;
}).call(this);