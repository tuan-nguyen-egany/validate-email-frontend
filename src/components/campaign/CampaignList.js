import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';

const CampaignList = ({ title, children }) => (
  <div>
    <h3 className="text-center m-4">{title}</h3>
    <Row>{children}</Row>
  </div>
);

CampaignList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default CampaignList;
