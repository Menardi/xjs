#x.js v0.1.0

A very simple Javascript library for two-way binding library with no dependencies.

## Demo
See the `demo.html` file.

## Quick start
Add the `x` (or `data-x`) attribute to any DOM element. Input fields will update values, and other fields will display these as they change.


	<input name="first_name" x="first_name">
	<select x="gender">
		<option value="Unspecified">Unspecified</option>
		<option value="Male">Male</option>
		<option value="Female">Female</option>
	</select>
	<input type="checkbox" x="check">

	Name: <span x="first_name"></span>
	Gender: <span x="gender"></span>
	Checkbox: <span x="check"></span>


Include the `x.js` file just before the body tag, and initialize it when you want.

	x.initialize()

All these variables can then be accessed and changed in your Javascript on the `x` object. For example, the first name above is `x.first_name`.

### Uses
- Bind an input box to a Javascript variable
- Have text on the page automatically update when data comes in from an XHR

## Usage

### x.initialize()

Call this to initialize x.js. This will look through the DOM for any elements with an x or data-x attribute and bind to them accordingly.

### x.reinitialize()

If you add new elements that need binding, have updated existing bound elements, or need to redo bindings for any reason. This will reset all current bindings, but keep all variables as they are.

### x.getAll()

This will return an object containing all the currently bound values.

## To Do

- Work correctly for radio buttons
- Prevent cursor from moving to end of a field on input