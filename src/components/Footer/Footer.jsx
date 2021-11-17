import React from 'react';
import { useStyles } from '../../styles/styles';
import {
  Facebook,
  Instagram,
  GitHub,
  Mail,
  LinkedIn,
} from '@mui/icons-material';
import { Typography } from '@mui/material';

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer_container}>
      <div className={classes.flex_box}>
        <p>
          <Facebook className={classes.social_icon} />
        </p>
        <p>
          <Instagram className={classes.social_icon} />
        </p>
        <p>
          <GitHub className={classes.social_icon} />
        </p>
        <p>
          <Mail className={classes.social_icon} />
        </p>
        <p>
          <LinkedIn className={classes.social_icon} />
        </p>
      </div>
      <div className={classes.copy_right}>
        <Typography variant="h6" textAlign="center">
          © 2021Copyright Rahul Pradhan
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
