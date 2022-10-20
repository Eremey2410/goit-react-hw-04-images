import { ImageGalleryList, GalleryItem, Image } from './ImageGallery.styled';

import PropTypes from 'prop-types';

const ImageGallery = ({ images, onImageClick }) => {
  console.log(images);
  return (
    <>
      <ImageGalleryList>
        {images.map(({ id, webformatURL, tags }) => (
          <GalleryItem key={id}>
            <Image src={webformatURL} alt={tags} onClick={onImageClick} />
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
