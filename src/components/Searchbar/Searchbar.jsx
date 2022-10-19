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
    console.log('event', event);
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Введите что-нибудь');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
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
          // value={imageName}
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

// import { Component } from 'react';
// import { toast } from 'react-toastify';
// import {
//   SearchBarHeader,
//   SearchForm,
//   SearchFormButton,
//   SearchFormButtonLabel,
//   SearchFormInput,
// } from './Searchbar.styled';
// import PropTypes from 'prop-types';

// class SearchBar extends Component {
//   state = {
//     searchQuery: '',
//   };
//   handleImageNameChange = event => {
//     this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     if (this.state.searchQuery.trim() === '') {
//       toast.error('Введите что-нибудь');
//       return;
//     }
//     this.props.onSubmit(this.state.searchQuery);
//     this.setState({ searchQuery: '' });
//   };
//   render() {
//     return (
//       <SearchBarHeader>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <SearchFormButton type="submit" className="button">
//             <SearchFormButtonLabel className="button-label">
//               Search
//             </SearchFormButtonLabel>
//           </SearchFormButton>

//           <SearchFormInput
//             className="input"
//             type="text"
//             name="imageName"
//             value={this.state.imageName}
//             onChange={this.handleImageNameChange}
//             // autocomplete="off"
//             // autofocus
//             placeholder="Search images and photos"
//           />
//         </SearchForm>
//       </SearchBarHeader>
//     );
//   }
// }
// SearchBar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
// export default SearchBar;
