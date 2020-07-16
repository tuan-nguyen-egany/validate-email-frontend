import React from 'react';
import { Container, Button, Col, Form } from 'react-bootstrap';
import { CSVLink } from 'react-csv';

const CampaignDetail = ({
  id,
  title,
  excelFileName,
  excelFilePath,
  emails,
  createdAt,
  status,
  fetchCampaign,
  children,
  totalEmail,
  totalEmailProcessing,
}) => {
  const handleReload = (e) => {
    fetchCampaign(id);
  };

  return (
    <Container as={Col} md="6" sm="12">
      {title && (
        <Form className="shadow-lg bg-white rounded p-4 m-4">
          <h3 className="text-center">CHI TIẾT</h3>
          <div>
            <b>Tiêu đề:</b> {title}
          </div>
          <div>
            <b>ID:</b> {id}
          </div>
          <div>
            <b>Ngày tạo:</b> {createdAt}
          </div>
          <div>
            <b>Trạng thái:</b> <span className="text-primary">{status}</span>
          </div>
          <div>
            <b>Tên file excel:</b> {excelFileName || 'Chưa upload file'}
          </div>
          <div>
            <b>Tổng số email:</b> {totalEmail}
          </div>
          <div>
            <b>Tên số email đã xử lí:</b> {totalEmailProcessing}
          </div>
          <Col className="text-center">
            <Button className="ml-1" onClick={handleReload}>
              Refresh
            </Button>
            <Button className="ml-1" as={CSVLink} data={emails} filename={`emails-${id}.csv`}>
              Tải file excel
            </Button>
          </Col>
        </Form>
      )}
      {children}
    </Container>
  );
};
export default CampaignDetail;
