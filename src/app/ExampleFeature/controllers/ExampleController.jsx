// Modules
import React  from 'react/addons';
import Router from 'react-router-component';
import Reflux from 'reflux';
import ReactD3 from 'react-d3-components';

// Store
import ExampleRefluxStore from '../stores/ExampleRefluxStore.jsx';

// Pages
import ExamplePage1 from '../pages/ExamplePage1.jsx';
import ExamplePage2 from '../pages/ExamplePage2.jsx';

// Global Components
import Header       from '../../global/components/Header.jsx';

// Router Components
var Locations = Router.Locations; // Router Container
var Location  = Router.Location;  // Specific Route

export default React.createClass({
  mixins: [Reflux.ListenerMixin], // Will mount and unmount eventListener automatically

  componentWillMount() {
    this.listenTo(ExampleRefluxStore, this.publishedDataStatus); // Listn to store, trigger callback
  },

  publishedDataStatus(data) {
    data.event === 'updatedStoreData' ? this.forceUpdate() : null; // Trigger child component refreshes
  },

  render() {
    return (
      <div id="example-controller-container" className="example-controller-container">
        <Header/>
        <Locations contextual id="example-pages-container" className="example-pages-container">
            <Location path="/"      handler = { ExamplePage1 } storeData={ExampleRefluxStore.data}/>
            <Location path="/page1" handler = { ExamplePage1 } storeData={ExampleRefluxStore.data}/>
            <Location path="/page2" handler = { ExamplePage2 } storeData={ExampleRefluxStore.data}/>
        </Locations>
      </div>
    );
  }
});
