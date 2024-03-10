import React, { Component } from 'react'
import './Quiz.css'

export default class QuizComponent extends Component {
    constructor(){
        super()
    }
  render() {
    return (
      <div className='quiz'>
        <div className='questionhead'>  
        <p className='num'>1 of 15</p>
        <h1 className='questionheadind'>Question</h1>
        </div>
        <p className='question'>Which is the only mammal that can jump ?</p>
        <div className='option'>
            <button className='op'>Dog</button>
            <button className='op'>Elephant</button>
            <button className='op'>Goat</button>
            <button className='op'>Lion</button>
        </div>
        <div className='buttons'>
            <button className='pre'>Previous</button>
            <button className='nxt'>Next</button>
            <button className='quit'>Quit</button>
        </div>
      </div>
    )
  }
}
