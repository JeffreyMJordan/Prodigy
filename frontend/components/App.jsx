import React from "react";
import HeaderContainer from './header/header_container';
import SessionFormContainer from './session_form/session_form_container';
import SongsIndexContainer from './songs/songs_index_container';
import AlbumsIndexContainer from './albums/albums_index_container';
import AlbumDisplayContainer from './albums/album_display_container';
import {Route} from "react-router-dom";
import {AuthRoute, LoggedInRoute} from "../util/route_util";
import SongDisplayContainer from "./songs/song_display_container";
import SongFormContainer from "./songs/song_form_container";
import ReferentFormContainer from "./referents/referent_form_container";
import AnnotationDisplayContainer from './annotations/annotation_display_container';
import AnnotationFormContainer from './annotations/annotation_form_container';


//Build giant switch statement that contains and handles logic for all the routes
//BUild a <Route path={song id path} and have the song display container pull the song and relevant 
//info out of the state
const App = () => (
  <div>
    <HeaderContainer />
  
  <Route path="/songs/:songId" component={SongDisplayContainer}/>
  <Route path="/albums/:albumId" component={AlbumDisplayContainer}/>
  <Route exact path="/" component={SongsIndexContainer}/>
  <Route exact path="/top/songs" component={SongsIndexContainer}/>
  <Route exact path="/top/albums" component={AlbumsIndexContainer}/>
  <Route exact path="/top/artists" component={SongsIndexContainer}/>
  <LoggedInRoute path="/new/song" component={SongFormContainer}/>

  {/* Try defining these routes inside the component I want it to render inside  */}
  {/* Pokedex might be a good example  */}
  {/* Pokedex has the routes inside different components */}
  {/* <LoggedInRoute path="/songs/:songId/create/:startIdx/:endIdx" component={ReferentFormContainer}/>
  <Route exact path="/songs/:songId/:refId" component={AnnotationDisplayContainer}/>
  <LoggedInRoute exact path="/songs/:songId/:refId/createannotation" component={AnnotationFormContainer}/> */}
  
  
  <AuthRoute path="/login" component={SessionFormContainer}/>
  <AuthRoute path="/signup" component={SessionFormContainer}/>

  </div>
);

export default App;