var app = angular.module("CalculatorApp", []);
app.controller('CalculatorController', CalculatorController);

function CalculatorController() {
	var parent = this;

	this.operation = "+";
	this.calculateResult = function() {
		if (this.a && this.b){
			var a = parseFloat(this.a);
			var b = parseFloat(this.b);

			if (this.operation == "+") {
				this.result = a + b;
			}
			else if (this.operation == "-") {
				this.result = a - b;
			}
			else if (this.operation == "*") {
				this.result = a * b;	
			}
			else if (this.operation == "/") {
				this.result = a / b;	
			}
		}		
	};

	this.setOperation = function(operation) {
		this.operation = operation;
		this.calculateResult();
	}
}