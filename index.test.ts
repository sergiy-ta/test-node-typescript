import { Calculator } from './index';
import { expect } from 'chai';

describe('calculator', () => {
    it('should initialize', () => {
        const calculator: Calculator = new Calculator(1, 2);
        expect(calculator.add()).to.equal(3);
    })
})