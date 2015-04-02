#x.js v0.0.1

A very simple Javascript library for two-way binding library with no dependencies.

## What it does
x.js removes the hassle of writing a lot of repetitive code to ensure the data in your Javascript matches what's displayed. It is designed to be as small as possible so does not necessarily cover all scenarios.

### Uses
- Bind an input box to a Javascript variable
- Have text on the page automatically update when data comes in from an XHR

## Demo
Coming soon

## Usage
Include the x.js file just before the closing body tag.

`<script src="x.js">`

Add the data-x attribute on any element you want to bind. The value will be the variable name you can access in your Javascript.

### HTML

`<input data-x="username">`

`<span data-x="username"></span>`

### Javascript

All the values you bind are available on the `xvalues` object. In the example above, the value of the input would be the variable `xvalues.username`.