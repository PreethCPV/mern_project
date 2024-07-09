import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const PodcastContainer = styled.div`
  margin-top: 20px;
`;

const PodcastItem = styled.div`
  margin-bottom: 10px;
`;

const PodcastTitle = styled.h4`
  margin: 0;
`;

const PodcastDescription = styled.p`
  margin: 5px 0 0;
`;

const CategoryPage = () => {
  const { name } = useParams();

  const renderPodcasts = () => {
    if (name.toLowerCase() === "culture") {
      return (
        <PodcastContainer>
          <h2>Podcasts</h2>
          <PodcastItem>
            <PodcastTitle>99% Invisible</PodcastTitle>
            <PodcastDescription>
              A podcast about all the thought that goes into the things we don't
              think about.
            </PodcastDescription>
          </PodcastItem>
          <PodcastItem>
            <PodcastTitle>The Daily</PodcastTitle>
            <PodcastDescription>
              This is how the news should sound. Twenty minutes a day, five days
              a week.
            </PodcastDescription>
          </PodcastItem>
          <PodcastItem>
            <PodcastTitle>Radiolab</PodcastTitle>
            <PodcastDescription>
              A show about curiosity. Where sound illuminates ideas, and the
              boundaries blur between science, philosophy, and human experience.
            </PodcastDescription>
          </PodcastItem>
        </PodcastContainer>
      );
    }
    return null;
  };

  return (
    <div>
      <h1>{name} Page</h1>
      <p>Content for {name} category.</p>
      {renderPodcasts()}
    </div>
  );
};

export default CategoryPage;
