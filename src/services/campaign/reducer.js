import {
  CAMPAIGNS_REQUEST,
  CAMPAIGNS_RECEIVED,
  CAMPAIGNS_FALTURE,
  CAMPAIGN_RECEIVED,
  CREATE_CAMPAIGN_RECEIVED,
  CHECK_CAMPAIGN_RECEIVED,
} from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  items: [],
  item: {},
  counts: {}
};

export default function campaignsReducer(state = initialState, action) {
  switch (action.type) {
    case CAMPAIGNS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CAMPAIGNS_RECEIVED:
      return {
        ...state,
        items: action.payload.campaigns,
        loading: false,
      };
    case CAMPAIGNS_FALTURE:
      return {
        ...state,
        error: action.payload.error,
      };

    case CAMPAIGN_RECEIVED:
      return {
        ...state,
        item: action.payload.campaign,
        loading: false,
      };
    case CREATE_CAMPAIGN_RECEIVED:
      return {
        ...state,
        item: action.payload.campaign,
        loading: false,
      };
    case CHECK_CAMPAIGN_RECEIVED:
      return {
        ...state,
        counts: action.payload.counts,
        loading: false,
      };
    default:
      return state;
  }
}
