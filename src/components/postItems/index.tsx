import React from 'react'
import {ScrollView, TouchableOpacity, View, StyleSheet} from "react-native";
import PostItem from "./PostItem";
import posts from "../../utils/posts";


const PostItems: React.StatelessComponent = (props: any) => {

    return (
        <View style={{flex: 1, flexDirection: 'column' , marginTop:13}}>
            {
                posts.map(post => (
                    <PostItem key={post.id} likeCount={`${post.likeCount} Likes`}
                              commentCount={post.commentCount} shareCount={`${post.shareCount} Shares`}
                              author={post.author} time={post.time} avatar={post.avatar}
                              image={post.image} text={post.text} isImage={post.isImage} isText={post.isText}
                              isVideo={post.isVideo} videoUrl={post.videoUrl} navigation={props.navigation}/>
                ))
            }
        </View>
    );
};
const styles = StyleSheet.create({
    contactContainerStyle: {
        marginRight: 5
    },
});
export default PostItems;
