import * as React from "react";
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from 'react-admin';

import { MyUrlField } from 'components'

export const UserList = props => {
    return (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
)};