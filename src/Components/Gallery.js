import React from 'react';

import GalleryItem from './GalleryItem';
import NotFound from './NotFound';
import StartSearch from './StartSearch';

const Gallery = props => {

  const title = props.title;
  const results = props.data;
  let items;
  if (results.length > 0 && !props.root) {
    items = results.map(item =>
      <GalleryItem url={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} key={item.id} />);
  } else if (results.length > 0 && props.root) {
    items = <StartSearch />
  } else {
    items = <NotFound />
  }


  return (
    <div className="photo-container">
      <h2>{title}</h2>
      <ul>
        {items}
      </ul>
    </div>
  );
}

export default Gallery;
