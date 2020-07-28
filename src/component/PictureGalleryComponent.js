import React from 'react';
import Gallery from 'react-grid-gallery';

const IMAGES = [
  {
    src: require('../assets/images/photo-1.jpeg'),
    thumbnail: require('../assets/images/photo-1.jpeg'),
    thumbnailWidth: 300,
    thumbnailHeight: 174,
    // isSelected: true,
    caption: 'After Interview Preparation Fisrt Year',
  },
  {
    src: require('../assets/images/photo-2.jpeg'),
    thumbnail: require('../assets/images/photo-2.jpeg'),
    thumbnailWidth: 300,
    thumbnailHeight: 212,
    // tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
    caption: 'A visit to Trichy ',
  },

  {
    src: require('../assets/images/rohan.jpeg'),
    thumbnail: require('../assets/images/rohan.jpeg'),
    thumbnailWidth: 300,
    thumbnailHeight: 212,
    caption: 'Best Innovation Award - UILA 2020',
  },
  {
    src: require('../assets/images/photo-4.jpeg'),
    thumbnail: require('../assets/images/photo-4.jpeg'),
    thumbnailWidth: 300,
    thumbnailHeight: 212,
    caption: 'After Interview Preparation Fisrt Year',
  },
];

function PicGallery(props) {
  return (
    <div className='container mt-5 mb-5'>
      <div className='row'>
        <div className='col-12 '>
          <Gallery images={IMAGES} />
        </div>
      </div>
    </div>
  );
}
export default PicGallery;
