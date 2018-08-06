import React from 'react';

import Card from 'wix-style-react/Card';
import {Container, Row, Col} from 'wix-style-react/Grid';

import FormField from 'wix-style-react/FormField';
import Input from 'wix-style-react/Input';
import Tooltip from 'wix-style-react/Tooltip';

export default () =>
  <div style={{background: '#F0F4F7', padding: 30}}>
    <Container>
      <Row>
        <Col span={6}>
          <Card>
            <Card.ButtonHeader
              title="Card header"
              buttonOnClick={() => alert('Clicked!')}
              theme="fullblue"
              buttonTitle="Click Me!"
              />

            <Card.Content>
              {field()}
            </Card.Content>
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <Card.LinkHeader
              tooltip={<Tooltip placement="top" alignment="center" content="And a tooltip!"/>}
              title="Card header"
              linkTo="http://www.wix.com/"
              linkTitle="Link to Wix"
              subtitle="Subtitle"
              />

            <Card.Content>
              {field()}
            </Card.Content>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.ButtonHeader
              withoutDivider
              title="Card header without no content"
              buttonOnClick={() => alert('Clicked!')}
              buttonTitle="Click Me!"
              theme="fullblue"
              />
          </Card>
        </Col>
      </Row>
    </Container>
  </div>;

function field() {
  return (
    <FormField label="Text Field">
      <Input placeholder="You can type here"/>
    </FormField>
  );
}
