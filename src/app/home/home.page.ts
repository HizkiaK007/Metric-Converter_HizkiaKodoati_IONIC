import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  // Variables to hold selected metric and units
  selectedMetric: string = '';
  selectedUnit1: string = '';
  selectedUnit2: string = '';
  initialValue: number = 0;
  result: number | null = null;

  constructor() {}

  // Conversion logic
  convert() {
    if (!this.selectedMetric || !this.selectedUnit1 || !this.selectedUnit2 || this.initialValue === null) {
      this.result = null;
      return;
    }

    // Perform conversion based on selected metric
    if (this.selectedMetric === 'length') {
      this.convertLength();
    } else if (this.selectedMetric === 'weight') {
      this.convertWeight();
    } else if (this.selectedMetric === 'temperature') {
      this.convertTemperature();
    }
  }

  // Conversion logic for length
  convertLength() {
    const lengthConversions: any = {
      meter: { meter: 1, kilometer: 0.001 },
      kilometer: { meter: 1000, kilometer: 1 },
    };

    const factor = lengthConversions[this.selectedUnit1][this.selectedUnit2];
    this.result = this.initialValue * factor;
  }

  // Conversion logic for weight
  convertWeight() {
    const weightConversions: any = {
      gram: { gram: 1, kilogram: 0.001 },
      kilogram: { gram: 1000, kilogram: 1 },
    };

    const factor = weightConversions[this.selectedUnit1][this.selectedUnit2];
    this.result = this.initialValue * factor;
  }

  // Conversion logic for temperature
  convertTemperature() {
    if (this.selectedUnit1 === 'celsius' && this.selectedUnit2 === 'fahrenheit') {
      this.result = (this.initialValue * 9/5) + 32;
    } else if (this.selectedUnit1 === 'fahrenheit' && this.selectedUnit2 === 'celsius') {
      this.result = (this.initialValue - 32) * 5/9;
    } else {
      // Same unit conversion
      this.result = this.initialValue;
    }
  }
}
