import React from 'react';
import PropTypes from 'prop-types';
import Campaign from './Campaign';

const CampaignItem = ({ campaign }) => {
  const date = new Date(campaign.createdAt);
  const formattedDate = `${date.getHours()}:${date.getMinutes()} - ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  return <Campaign id={campaign._id} title={campaign.title} status={campaign.status} createdAt={formattedDate} />;
};

CampaignItem.propTypes = {
  campaign: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default CampaignItem;
