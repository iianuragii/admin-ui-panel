import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
} from 'react-admin';
import PostPagination from './MyPagination'
import { TextInput } from 'react-admin';

const postFilters = [
    <TextInput label="Search" source="name" alwaysOn />,
    <TextInput label="Title" source="email" defaultValue="Hello, World!" />,
];

const PostList = (props) => {
  return (
    <List {...props}
      pagination={<PostPagination />} 
      filters={postFilters}
      >
        <Datagrid>
            <TextField source='id'/>
            <TextField source='name'/>
            <TextField source='email'/>
            <TextField source='role'/>
            <EditButton basePath = '/posts'/>
            <DeleteButton basePath = '/posts'/>
        </Datagrid>
    </List>
  )
}

export default PostList