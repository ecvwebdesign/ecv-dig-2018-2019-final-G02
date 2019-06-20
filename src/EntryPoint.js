import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import Navigator from './navigation/Navigator'
import store from './store'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    // Configure app components here if necessary.
  }

  render() {
    // Put here all providers for things that will be use in all the app.
    // Example: <ReduxProvider>, <PersistGate>, ...
    return (
      <ReduxProvider store={store}>
        <Navigator />
      </ReduxProvider>
    )
  }
}
