import { ToastContainer, toast } from 'react-toastify';
import { FcSearch } from 'react-icons/fc';
import 'react-toastify/dist/ReactToastify.css';
import { SearchBox, SearchBtn, SearchInput } from './SearchForm.styled';
import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = evt => {
    setQuery(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    // console.log(query);

    if (query.trim() === '') {
      return toast.error('Please, enter a search term');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchBox onSubmit={handleSubmit}>
      <ToastContainer theme="colored" position="top-right" autoClose={2000} />
      <SearchBtn type="submit">
        <FcSearch size="30" />
      </SearchBtn>

      <SearchInput
        value={query}
        type="text"
        placeholder="Search movies..."
        onChange={handleQueryChange}
      />
    </SearchBox>
  );
};

export default SearchForm;
