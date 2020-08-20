import React, { Component } from 'react';
import Button from './Button'
import Display from './Display'

import './Calculadora.css'

const initialState = {
    displayValue: '0',
    operador: null,
    previousValue: null,
    clearScreen: true,
}

export default class Calculadora extends Component {
    constructor(props) {
        super(props);

        this.state = { ...initialState }
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    handleOperador(operador) {
        const previousValue = this.state.displayValue
        this.setState({ operador, previousValue, clearScreen: true })
    }

    handleDigit(number) {
        if(this.state.displayValue.includes('.') && number === '.') {
            return
        }

        const displayValue = this.state.clearScreen ? number : this.state.displayValue + number
        this.setState({ displayValue, clearScreen: false })
    }

    handleEquals() {
        const displayValue = parseFloat(this.state.displayValue)
        const previousValue = parseFloat(this.state.previousValue)
        const operador = this.state.operador
        let result = 0

        if(operador === '+') {
            result = displayValue + previousValue
        } else if(operador === '-') {
            result = previousValue - displayValue
        } else if(operador === '/') {
            result = previousValue / displayValue
        } else if(operador === '*') {
            result = displayValue * previousValue
        } else {
            return
        }

        this.setState({ displayValue: `${result.toString().includes('.') ? result.toFixed(3) : result}`, operador: null, previousValue: null })
    }

    render() {
        return (
            <div className="calculadora">
                <Display value={this.state.displayValue}/>
                <Button value='AC' double click={e => this.clearMemory()} />
                <Button value='/' operador click={value => this.handleOperador(value)}/>
                <Button value='*' operador click={value => this.handleOperador(value)}/>
                <Button value='7' click={value => this.handleDigit(value)}/>
                <Button value='8' click={value => this.handleDigit(value)}/>
                <Button value='9' click={value => this.handleDigit(value)}/>
                <Button value='-' operador click={value => this.handleOperador(value)}/>
                <Button value='4' click={value => this.handleDigit(value)}/>
                <Button value='5' click={value => this.handleDigit(value)}/>
                <Button value='6' click={value => this.handleDigit(value)}/>
                <Button value='+' operador click={value => this.handleOperador(value)}/>
                <Button value='1' click={value => this.handleDigit(value)}/>
                <Button value='2' click={value => this.handleDigit(value)}/>
                <Button value='3' click={value => this.handleDigit(value)}/>
                <Button value='=' equals operador click={value => this.handleEquals()}/>
                <Button value="0" double click={value => this.handleDigit(value)}/>
                <Button value='.' click={value => this.handleDigit(value)}/>
            </div>
        )
    }
}