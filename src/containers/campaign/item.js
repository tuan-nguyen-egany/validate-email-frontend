import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  fetchCampaign,
} from '../../services/campaign/action';
import { campaignsSelector } from '../../services/campaign/selector';
import CampaignDetails from '../../components/campaign/CampaignDetails';
import { Form } from 'react-bootstrap';

const CampaignItem = (props) => {
  const { campaign, loading, error, fetchCampaign } = props;
  const id = props.match.params.campaignId;

  useEffect(() => {
    fetchCampaign(id);
  }, [fetchCampaign, id]);

  const date = new Date(campaign.createdAt);
  const formattedDate = `${date.getHours()}:${date.getMinutes()} - ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  return (
    <CampaignDetails
      id={campaign._id}
      title={campaign.title}
      excelFileName={campaign.excelFileName}
      excelFilePath={campaign.excelFilePath}
      emails={campaign.emails}
      status={campaign.status}
      totalEmail={campaign.totalEmail}
      totalEmailProcessing={campaign.totalEmailProcessing}
      createdAt={formattedDate}
      fetchCampaign={fetchCampaign}
    >
      {<Form className="text-center text-info">{loading && !error ? <p>Loading...</p> : ''}</Form>}
    </CampaignDetails>
  );
};

const mapStateToProps = createSelector(campaignsSelector, (campaign) => ({
  campaign: campaign.item,
  loading: campaign.loading,
  error: campaign.error,
}));

const mapActionToProps = {
  fetchCampaign,
};

export default connect(mapStateToProps, mapActionToProps)(CampaignItem);
