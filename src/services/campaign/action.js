import axios from 'axios';

import {
  CAMPAIGNS_REQUEST,
  CAMPAIGNS_RECEIVED,
  CAMPAIGNS_FALTURE,
  CAMPAIGN_RECEIVED,
  CREATE_CAMPAIGN_RECEIVED,
} from './actionTypes';

export const requestCampaigns = () => {
  return {
    type: CAMPAIGNS_REQUEST,
  };
};

export const showError = (error) => {
  return {
    type: CAMPAIGNS_FALTURE,
    payload: { error },
  };
};

export const receivedCampaigns = (campaigns) => {
  return {
    type: CAMPAIGNS_RECEIVED,
    payload: { campaigns },
  };
};
export function fetchCampaigns() {
  return async (dispatch) => {
    try {
      dispatch(requestCampaigns());
      const res = await axios.get('/campaigns?sort=-_id');
      const data = res.data;
      dispatch(receivedCampaigns(data));
    } catch (error) {
      dispatch(showError(error.response.data));
    }
  };
}

export const receivedCreateCampaign = (campaign) => {
  return {
    type: CREATE_CAMPAIGN_RECEIVED,
    payload: { campaign },
  };
};
export function createCampaign(title, file) {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', title);

      dispatch(requestCampaigns());
      const res = await axios.post('/campaigns', formData);
      const data = res.data;
      dispatch(receivedCreateCampaign(data));
      window.location.href = `/campaigns/${data._id}`;
    } catch (error) {
      dispatch(showError(error));
    }
  };
}

export const receivedCampaign = (campaign) => {
  return {
    type: CAMPAIGN_RECEIVED,
    payload: { campaign },
  };
};
export function fetchCampaign(campaignId) {
  return async (dispatch) => {
    try {
      dispatch(requestCampaigns());
      const res = await axios.get(`/campaigns/${campaignId}`);
      let data = res.data;
      data = {
        ...data,
        emails: data.emails.map((email) => {
          let validMailbox = email.validMailbox === true ? 'true' : 'false';
          let validDomain = email.validDomain === true ? 'true' : 'false';

          return {
            ...email,
            validMailbox,
            validDomain,
          };
        }),
      };
      dispatch(receivedCampaign(data));
    } catch (error) {
      dispatch(showError(error.response.data));
    }
  };
}
