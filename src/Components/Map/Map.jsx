import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { LocationOnOutlinedIcon } from '@material-ui/icons/LocalActivityOutlined';
import Rating from '@material-ui/lab';

import useStyles from './style';

function Map() {
    const classes = useStyles();
    const isMobile = useMediaQuery('(mix-width: 600px)');
    return (
        <div className={classes.mapContainer}>
           <GoogleMapReact
            bootstrapURLKeys={{key: ''}}
            defaultCenter={}
           >

           </GoogleMapReact>
        </div>
    )
}

export default Map;
