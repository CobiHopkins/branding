import { useState } from 'react';
import { Stack, Typography } from '@mui/material';

// Component imports.
import BannerWithSingleText from '../../components/Layouts/BannerWithSingleText/BannerWithSingleText';
import AnimatedLoadingBalls from '../../components/Animations/AnimatedLoadingBalls/AnimatedLoadingBalls';
import ListGridLayout from '../../components/Layouts/ListGridLayout/ListGridLayout';
import AnimationFadeIn from '../../components/Animations/AnimationFadeIn/AnimationFadeIn';
import TextImageComponent from '../../components/Layouts/TextImageComponent/TextImageComponent';

// temp blog information -- REPLACE WITH DATA CONTEXT LATER.
const blogPosts = [
    {
        title: "First Blog Post",
        date: "2024-01-15",
        summary: "This is the summary of the first blog post. It provides an overview of the content discussed in the post.",
        imageSrc: "https://via.placeholder.com/150",
        imageAlt: "An illustrative image for the first blog post."
    },
    {
        title: "Second Blog Post",
        date: "2024-02-10",
        summary: "This is the summary of the second blog post. It delves into more advanced topics and insights.",
        imageSrc: "https://via.placeholder.com/150",
        imageAlt: "An illustrative image for the second blog post."
    }
]


const Blog = () => {

    const handleLayoutChange = () => {
        setGridLayout((prevLayout) => (prevLayout === "row" ? "column" : "row"));
    }

    /* todo: implement blog page */

    // temp loading state
    const [ isLoading, setIsLoading ] = useState(false);

    const [ gridLayout, setGridLayout ] = useState("row");


    return (
        <Stack component="section" direction="column" spacing={5} alignItems="center" sx={{ marginTop: 5}}>
            <BannerWithSingleText title="Content Activation: Blog" />
            <Stack direction="column" alignContent="center" justifyContent="center" sx={{ textAlign: 'center' }}>
                {isLoading && 
                    <>
                        <Typography variant="h4" color="primary">Blog coming soon...</Typography>
                        <AnimatedLoadingBalls pxSize={20}/> 
                    </>}

                <ListGridLayout layoutType={gridLayout} itemSpacing={2}>
                    {/* Blog posts will go here */}

                    {blogPosts.map((post, index) => {
                        return (
                            <AnimationFadeIn delay={index * 0.25}>
                                <TextImageComponent
                                    key={index}
                                    title={post.title}
                                    text={post.summary}
                                    imageAlt={post.imageAlt}
                                    imageSize="medium" />
                            </AnimationFadeIn>
                        )
                    })}

                </ListGridLayout>
            </Stack>
        </Stack>
    );
}

export default Blog;