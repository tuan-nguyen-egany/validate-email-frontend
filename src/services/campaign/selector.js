import { createSelector } from 'reselect';

export const campaignsSelector = createSelector(
  (state) => state.campaigns,
  (campaigns) => campaigns
);