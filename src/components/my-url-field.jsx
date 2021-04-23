import * as React from "react";

import { makeStyles } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';

// @params
 /*  record:    email: "Rey.Padberg@karina.biz"
                id: 10
                name: "Clementina DuBuque"
                phone: "024-648-3804"
                username: "Moriah.Stanton"
  * source   website: "ambrose.net"
  * rest    // { basePath: "/users", resource: "users"} }
*/

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        paddingLeft: 2,
    },
});


export const MyUrlField = ({ record = {}, source, ...rest }) => {
    const classes = useStyles();

    return (
            <a 
                className={classes.link}
                href={`https://${record[source]}`}
                target="_blank"
            >
                {record[source]}
                <LaunchIcon className={classes.icon} />
            </a>
        )
}
