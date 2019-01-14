import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Button,
  Typography,
  Grid,
} from '@material-ui/core';
import {
  injectIntl,
  intlShape,
  FormattedMessage,
} from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  firstItem: {
    marginTop: '10px',
  },
  lastItem: {
    marginBottom: '10px',
  },
};

function ResetPassword({
  newPassword,
  newPasswordRepeat,
  handleFieldChange,
  handleSubmit,
  email,
  intl,
  classes,
}) {
  return (
    <form action="">
      <Grid container spacing={8} direction="column" alignItems="center" justify="center">
        <Grid item className={classes.firstItem}>
          <Typography variant="title">
            <FormattedMessage
              id="resetPassword.resetForEmail"
              values={{
                email,
              }}
            />
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            label={intl.formatMessage({ id: 'resetPassword.newPassword' })}
            value={newPassword}
            onChange={e => handleFieldChange('newPassword', e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label={intl.formatMessage({ id: 'resetPassword.newPasswordRepeat' })}
            value={newPasswordRepeat}
            onChange={e => handleFieldChange('newPasswordRepeat', e.target.value)}
          />
        </Grid>
        <Grid item className={classes.lastItem}>
          <Button type="submit" onClick={handleSubmit}>
            <Typography>
              <FormattedMessage id="resetPassword.submit" />
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

ResetPassword.propTypes = {
  newPassword: PropTypes.string.isRequired,
  newPasswordRepeat: PropTypes.string.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
  classes: PropTypes.shape({
    firstItem: PropTypes.string.isRequired,
    lastItem: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(injectIntl(ResetPassword));
