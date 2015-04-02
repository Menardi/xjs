var nodes = document.querySelectorAll('[data-x]');
var listeners = {};
var xvalues = {
	_attributes: {}
};

for(var i=0; i<nodes.length; i++) {
	(function(){
		var varName = nodes[i].attributes['data-x'].value;
		xvalues[varName] = xvalues[varName] || '';

		Object.defineProperty(xvalues, varName, {
			get: function() {
				return xvalues._attributes[varName];
			},
			set: function(value) {
				xvalues._attributes[varName] = value;
				if(listeners[varName]) {
					for(var i=0; i<listeners[varName].length; i++) {
						if(typeof listeners[varName][i].value !== 'undefined') {
							listeners[varName][i].value = value;
						} else {
							listeners[varName][i].innerHTML = value;
						}
					}
				}
			}
		});

		listeners[varName] = listeners[varName] || [];
		listeners[varName].push(nodes[i]);

		if(typeof nodes[i].value !== 'undefined') {
			nodes[i].addEventListener('input', function(ev) {
				xvalues[varName] = ev.target.value;
			});
		}
	})();
}