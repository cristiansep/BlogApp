import React, {useContext} from 'react';
import BlogPostForm from '../components/BlogPostForm';
import { StyleSheet} from 'react-native';


import { Context } from '../context/BlogContext';


const CreateScreen = ({navigation}) => {
 

    const {addBlogPosts} = useContext(Context);

    return <BlogPostForm onSubmit={(title, content) => {
        addBlogPosts(title,content, () => navigation.navigate('Index'))
    }}/>
    
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    },
  

});

export default CreateScreen
