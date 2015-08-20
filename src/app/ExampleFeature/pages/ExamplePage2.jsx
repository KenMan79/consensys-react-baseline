// Modules
import React from 'react/addons';

// Store
import ExampleRefluxStore from '../stores/ExampleRefluxStore.jsx';

export default React.createClass({

  // Local Method
  uiMethod() {
    ExampleRefluxStore.setStoreData({moreTestData: 'THIS IS ANOTHER TEST'});
  },

  render() {
    return (
      <div className = "page-2">
        <main>
          <h2>THIS IS PAGE 2</h2>
          <button onClick={this.uiMethod}>Button specific to page 2</button>
        </main>
      </div>
    );
  }
});
