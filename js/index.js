class App {
  //parameters
  minWeight = 30;
  maxWeight = 130;
  minHeight = 120;
  maxHeight = 220;

  //elements
  initialWeightInput = null;
  desiredWeightInput = null;
  heightInput = null;
  startDateInput = null;
  endDateInput = null;
  button = null;

  DOMElements = {
    initialWeightInput: "weight-initial",
    desiredWeightInput: "weight-desired",
    heightInput: "height",
    startDateInput: "start-date",
    endDateInput: "end-date",
    button: "[data-button]",
  };
  initializeApp() {
    this.handleElements();
    this.setInitialValues();
    this.addEventListeners();
  }

  addEventListeners() {}

  handleElements() {
    this.initialWeightInput = document.getElementById(
      this.DOMElements.initialWeightInput
    );
    this.desiredWeightInput = document.getElementById(
      this.DOMElements.desiredWeightInput
    );
    this.heightInput = document.getElementById(this.DOMElements.heightInput);
    this.startDateInput = document.getElementById(
      this.DOMElements.startDateInput
    );
    this.endDateInput = document.getElementById(this.DOMElements.endDateInput);
    this.button = document.querySelector(this.DOMElements.button);
  }
  setInitialValues() {
    this.setInputValues(
      this.initialWeightInput,
      this.minWeight,
      this.maxWeight
    );
    this.setInputValues(
      this.desiredlWeightInput,
      this.minWeight,
      this.maxWeight
    );
    this.setInputValues(this.heightInput, this.minHeight, this.maxHeight);
  }

  setInputValues(element, minValue, maxValue) {
    element.min = minValue;
    element.max = maxValue;
    element.value = this.getAverage(minValue, maxValue);
  }

  getAverage(valueOne, valueTwo) {
    return Math.round((valueOne + valueTwo) / 2);
  }
}
