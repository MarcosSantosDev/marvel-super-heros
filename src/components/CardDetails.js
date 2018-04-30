import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';

class CardDetails extends Component {
 render() {
    const { title, list } = this.props;

    return (
      <div style={{ padding: '30px' }}>
        <Row gutter={0}>
          <Col span={50}>
            <Card title={title} >
              {
                list.items.map((item, i) =>
                 <span key={i} onClick={this.showComics}><li >{item.name}</li></span>
                )
              }
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CardDetails;
