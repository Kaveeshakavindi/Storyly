// endpoint - /stories
// file path - stories>page.tsx
'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
interface Story {
  id: string;
  img: string;
  title: string;
  author: string;
  story: string;
}

const Stories = () => {
  const [storyData, setStoryData] = useState<Story[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data: Story[]) => setStoryData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Stories</h1>
      <ul>
        {storyData.map((story) => (
          <li key={story.id}>
            <button className="bg-amber-400 px-3 py-1 m-1 rounded-lg hover:bg-amber-300">
              <Link href={`/stories/${story.id}`}>{story.title}</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stories;

