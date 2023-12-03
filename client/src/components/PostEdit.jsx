import React from 'react'
import { Edit, SimpleForm, TextInput} from 'react-admin'

const PostEdit = (props) => {
  return (
    <div>
        <Edit title='Let us Edit a Post' {...props}>
            <SimpleForm>
                <TextInput source='id'/>
                <TextInput source='name'/>
                <TextInput source='email'/>
                <TextInput source='role'/>
            </SimpleForm>
        </Edit>
    </div>
  )
}

export default PostEdit