import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export default function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleImageNameChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Введите что-нибудь');
      return;
    }
    onSubmit(searchQuery);
  };

  return (
    <SearchBarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          className="input"
          type="text"
          name="imageName"
          value={searchQuery}
          onChange={handleImageNameChange}
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBarHeader>
  );
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
