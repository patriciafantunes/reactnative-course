/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, { useState } from 'react';
import MainNavigation from './navigation/MainNavigation';
import {Provider} from "react-redux"
import store from "./store"

function App() {

  return(
      <Provider store={store}>
        <MainNavigation />
      </Provider>
       
  )
}

{/* <SearchBar updateSearch={text => setSearch(text)} />
       <ArtCollectionList data={data} searchValue={search} /> */}

/*  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        search: ""
      }
    }

    


   render () {
     return(
       <SafeAreaView>
          <SearchBar updateSearch={text => this.updateSearch(text)} />
          <ArtCollectionList data={data} searchValue={this.state.search} />
       </SafeAreaView>
     )
   }
 } */
 
 export default App;