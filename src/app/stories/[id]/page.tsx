'use client';
import { useEffect, useState } from 'react';

interface StoryProps {
  id: string;
  img: string;
  title: string;
  author: string;
  story: string;
}

const StoryPage = ({ params }: { params: { id: string } }) => {
    const [storyData, setStoryData] = useState<StoryProps | null>(null);

    useEffect(() => {
        fetch('/data.json')
            .then((response) => response.json())
            .then((data: StoryProps[]) => {
                const story = data.find((s) => s.id === params.id);
                setStoryData(story || null);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [params.id]);

    if (!storyData) {
        return <div>Story not found</div>;
    }

    return (
        <div>
            <h1>{storyData.title}</h1>
            <p>{storyData.story}</p>
        </div>
    );
};

export default StoryPage;
