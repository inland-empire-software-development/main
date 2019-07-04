import React, {useEffect} from 'react';
import {data} from '../utils/successStoriesData';

// utils
import {maxTextForContainer} from '../utils/maxTextForContainer';

// components
import SuccessStoriesImage from './SuccessStoriesImage';
import SuccessStoriesUserTitle from './SuccessStoriesUserTitle';
import SuccessStoriesMoreBtn from './SuccessStoriesMoreBtn';
import SocialBtnCircleContainer from './SocialBtnCircleContainer';

// hooks
import useRandomStory from '../utils/useRandomStory';

function SuccessStories() {
  let successExcerpt = React.createRef();

  // custom hook that chooses random story.
  const currentStory = useRandomStory(data);
  const currentExcerpt = currentStory.excerpt;

  // Function used to replace excerpt depending on container size.
  const truncateExcerpt = (storyContainerElem, storyString) => {
    const newText = maxTextForContainer(storyContainerElem, storyString);
    if (successExcerpt !== null) {
      successExcerpt.textContent = newText;
    }
  };

  // Register event listener to change text depending on size of container
  useEffect(() => {
    window.addEventListener('resize', () =>
      truncateExcerpt(successExcerpt, currentExcerpt)
    );
    truncateExcerpt(successExcerpt, currentStory.excerpt);

    return () => {
      window.removeEventListener('resize', () =>
        truncateExcerpt(successExcerpt, currentStory.excerpt)
      );
    };
  });

  const {name, title, imageURL, linkToStory} = currentStory;

  return (
    <div id="success-stories" className="grid-container">

      {/* left section - image of person */}
      <SuccessStoriesImage
        name={name}
        imageURL={imageURL}
      />

      {/* right section - success story*/}
      <p className='success-header'>SUCCESS STORY</p>
      <SuccessStoriesUserTitle
        name={name}
        title={title}
      />
      <p ref={(p) => successExcerpt = p} className="success-excerpt">
        {/* currentExcerpt */}
      </p>

      {/* right section - buttons*/}
      <div className="success-btn-container">
        <SuccessStoriesMoreBtn
          linkToStory={linkToStory}
        />
        <SocialBtnCircleContainer
          userStory={currentStory}
        />
      </div>

    </div>
  );
}

export default SuccessStories;
