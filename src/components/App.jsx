import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import BtnLoadMore from '../components/Button/Button';
import { AppContainer } from './App.styled';
import Loader from '../components/Loader/Loader';
import { toast } from 'react-toastify';
import ModalBox from '../components/Modal/Modal';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29482486-4af73e7428fa82566a6b382e2';
export function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (query !== '') {
      setLoading(true);
      fetch(
        `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(image => {
          if (!image.total) {
            return toast.error('По вашему запросу ничего не найдено');
          }

          setImages(prevImages => [...prevImages, ...image.hits]);

          setTotalImages(image.total);
        })
        .catch(error => error)
        .finally(() => {
          setLoading(false);
        });
    }
  }, [page, query]);

  const handleSubmit = imageName => {
    if (query === imageName) {
      return toast.error(`Вы уже просматриваете ${query}`);
    }
    setQuery(imageName.toLowerCase());
    setImages([]);
    setPage(1);
  };
  const onLoadMoreClick = () => {
    setPage(page + 1);
  };
  const onImageClick = url => {
    setModalImage(url);
    setShowModal(true);
  };
  const onModalClose = () => {
    setShowModal(false);
  };
  return (
    <AppContainer>
      <SearchBar onSubmit={handleSubmit} />
      {images.length !== 0 && (
        <ImageGallery images={images} onImageClick={onImageClick} />
      )}
      {loading && <Loader />}

      {images.length !== totalImages && !loading && (
        <BtnLoadMore onClick={onLoadMoreClick} />
      )}
      {showModal && <ModalBox image={modalImage} onModalClose={onModalClose} />}
      <ToastContainer autoClose={3000} />
    </AppContainer>
  );
}
