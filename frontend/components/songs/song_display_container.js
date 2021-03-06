import {connect} from "react-redux";
import {fetchSong, deleteSong} from "../../actions/song_actions";
import SongDisplay from './song_display';
import {withRouter} from "react-router-dom";
import { fetchPayloadBySongID } from "../../actions/payload_actions";
import {deleteReferent} from "../../actions/referent_actions";



const mapStateToProps = (state, ownProps) => {
  let songId = ownProps.match.params.songId;
  let song = state.songs[songId];
  let album = undefined;
  let artist = undefined;
  let referents = undefined;
  if (song){
    album = state.albums[song.album_id];
    artist = state.artists[song.artist_id];
    referents = state.referents[song.id];
  }
  return {
    songId: songId,
    song: song,
    album: album,
    artist: artist,
    referents: referents,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let songId = ownProps.match.params.songId;
  return {
    fetchSong: (id) => dispatch(fetchSong(id)),
    deleteSong: (id) => dispatch(deleteSong(id)),
    fetchPayloadBySongID: (id) => dispatch(fetchPayloadBySongID(id)),
    deleteReferent: (id) => dispatch(deleteReferent(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongDisplay));