import * as PayloadAPIUtil from '../util/payload_api_util';

import {receiveSong} from './song_actions';
import {receiveAlbum} from './album_actions';
import {receiveArtist} from './artist_actions';

export const RECEIVE_PAYLOADS = "RECEIVE_PAYLOADS";
export const RECEIVE_PAYLOAD = "RECEIVE_PAYLOAD";

export const receivePayloads = (payloads) => {
  return {
    type: RECEIVE_PAYLOADS,
    payloads
  };
};

export const receivePayload = (payload) => {
  return {
    type: RECEIVE_PAYLOAD,
    payload
  };
};

export const fetchPayloads = (limit) => (dispatch) => {
  return PayloadAPIUtil.fetchPayloads(limit)
    .then((payloads) => dispatch(receivePayloads(payloads)));
};

export const fetchPayloadBySongID = (id) => (dispatch) => {
  return PayloadAPIUtil.fetchPayloadBySongID(id)
    .then((payload) => dispatch(receivePayload(payload)));
};