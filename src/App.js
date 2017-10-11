import React, { Component } from 'react';
import { StandardCard, StandardList, DangerButton } from './shared-components';


class App extends Component {
  render() {
    return (
      <div className="app">

        <StandardCard>
          <StandardList data={[1, 2, 3, 4, 5]} />
          <DangerButton />
        </StandardCard>

      </div>
    );
  }
}

export default App;
