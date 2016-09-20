import React from 'react'

function greeter(person: string) {
    return "Hello, " + person;
}

export class DummyComponent extends React.Component {
  render () {
    return (
      <article>
        <h1>Hi from {greeter('Julian')}</h1>
        <em>Now let's play with React!</em>
      </article>
    )
  }
}
