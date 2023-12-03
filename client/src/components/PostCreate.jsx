import React from 'react'
import { Create, SimpleForm, TextInput} from 'react-admin'

const PostCreate = (props) => {
  return (
    <div>
        <Create title='Let us Create a Post' {...props}>
            <SimpleForm>
                <TextInput source='id'/>
                <TextInput source='name'/>
                <TextInput source='email'/>
                <TextInput source='role'/>
            </SimpleForm>
        </Create>
    </div>
  )
}

export default PostCreate