import { ImageGalleryList, GalleryItem, Image } from './ImageGallery.styled';

import PropTypes from 'prop-types';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <>
      <ImageGalleryList>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <GalleryItem key={id}>
            <Image
              src={webformatURL}
              alt={tags}
              onClick={() => {
                onImageClick(largeImageURL);
              }}
            />
          </GalleryItem>
        ))}
      </ImageGalleryList>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  onImageClick: PropTypes.func.isRequired,
};
export default ImageGallery;
