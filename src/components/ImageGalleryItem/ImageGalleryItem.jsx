import { GalleryItem, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images, onImageClick }) => {
  return (
    <>
      {images.map(({ id, webformatURL, tags }) => (
        <GalleryItem key={id}>
          <Image src={webformatURL} alt={tags} onClick={onImageClick} />
        </GalleryItem>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
