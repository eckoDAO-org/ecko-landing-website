import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Input } from 'semantic-ui-react';
import styled from 'styled-components/macro';
import { ArrowRightIcon } from '../../../assets';
import { getColor } from '../../../styles/theme';
import { FlexContainer } from '../../shared/Container';
import Label from '../../shared/Label';

const websiteUrl = 'https://kaddex.us14.list-manage.com/subscribe/post';
const u = '648b6f47c0aacfe9b00239f0f';
const id = '72d47a1642';

const Container = styled.div`
  .ui.input > input {
    padding: 8px;
    border: 1px solid ${getColor('grey')};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
      width: 100%;
    }
  }
`;

const MailchimpFormContainer = () => {
  const url = `${websiteUrl}?u=${u}&id=${id}`;
  return (
    <Container>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => <CustomForm status={status} message={message} onValidated={(formData) => subscribe(formData)} />}
      />
    </Container>
  );
};

export default MailchimpFormContainer;

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
      });
  };
  return (
    <FlexContainer className="column" gap={16} desktopStyle={{ maxWidth: 390 }}>
      <Label fontFamily="syncopate" style={{ marginTop: 14 }}>
        Join our newsletter
      </Label>

      <Input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        value={email}
        placeholder="your@email.com"
        isRequired
        iconPosition="right"
        style={{ display: 'flex', width: '100%' }}
        icon={
          <div
            style={{
              backgroundColor: getColor('grey'),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopRightRadius: 4,
              borderBottomRightRadius: 4,
              padding: 8,
            }}
          >
            <ArrowRightIcon onClick={handleSubmit} />
          </div>
        }
      />

      {status === 'sending' && <Label>Sending...</Label>}
      {status === 'error' && <Label color="pink" dangerouslySetInnerHTML={{ __html: message }} />}
      {status === 'success' && <Label color="primary" dangerouslySetInnerHTML={{ __html: message }} />}
    </FlexContainer>
  );
};
