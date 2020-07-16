import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Popover, OverlayTrigger } from 'react-bootstrap';
import CreateCampaign from '../campaign/CreateCampaign'

const CreateCampaignOverlay = () => {
  const popover = (
    <Popover id={`popover-positioned-left`}>
      <Popover.Title as="h3">Tạo bảng mới</Popover.Title>
      <CreateCampaign/>
    </Popover>
  );

    return (
      <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={popover}
        rootClose
      >
        <Nav.Link active variant="secondary"><span className="border p-2 text-white">Tạo bảng mới</span></Nav.Link>
      </OverlayTrigger>
    )
}

function Header(props) {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
      sticky="top"
      className="pl-3 pr-3"
    >
      <Navbar.Brand as={Link} to="/">
        Trang chủ
      </Navbar.Brand>
      <CreateCampaignOverlay />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    </Navbar>
  );
}

export default Header;
