import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { fetchCampaigns } from 'services/campaign/action';
import { campaignsSelector } from 'services/campaign/selector';
import { Spinner } from 'react-bootstrap';
import CampaignList from 'components/campaign/CampaignList';
import CampaignItem from 'components/campaign/CampaignItem';

function Campaign(props) {
  const { error, loading, campaigns, fetchCampaigns } = props;

  useEffect(() => {
    fetchCampaigns();
  }, [fetchCampaigns]);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (loading) {
    return <Spinner animation="grow" variant="primary" />;
  }

  return (
    <CampaignList title="Trang chủ">
      {campaigns && campaigns.campaigns &&
        campaigns.campaigns.map((campaign) => (
          <CampaignItem key={campaign._id} campaign={campaign} />
        ))}
    </CampaignList>
  );
}

const mapStateToProps = createSelector(campaignsSelector, (campaigns) => ({
  campaigns: campaigns.items,
  loading: campaigns.loading,
  error: campaigns.error,
}));

const mapActionToProps = {
  fetchCampaigns,
};

export default connect(mapStateToProps, mapActionToProps)(Campaign);
