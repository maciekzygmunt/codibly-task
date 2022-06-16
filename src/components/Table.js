import { useEffect, useRef, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormControl } from '@mui/material/FormControl';

function Table() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  const handleChange = (e, value) => {
    setPage(value);
  };

  const IDinputRef = useRef();

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`https://reqres.in/api/products?per_page=5&page=${page}`);
      const data = await response.json();
      setProducts(data.data);
      console.log(data.data);
    };
    getProducts();
  }, [page]);

  const searchHandler = (e) => {
    e.preventDefault();
    const getProduct = async () => {
      const response = await fetch(`https://reqres.in/api/products?id=${IDinputRef.current.value}`);
      const data = await response.json();
      setProducts([data.data]);
    };
    getProduct();
  };

  return (
    <Wrapper>
      <PageNumber>Page: {page}</PageNumber>
      <form onSubmit={searchHandler}>
        <Input placeholder="search" type="number" min={1} max={12} ref={IDinputRef} />
      </form>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      <Pagination count={3} page={page} onChange={handleChange} />
    </Wrapper>
  );
}
export default Table;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 1rem;
`;

const PageNumber = styled.div`
  font-weight: 500;
`;

const Input = styled.input`
  border: 1px solid #ced4da;
  border-radius: 6px;
  height: 2.2rem;
  width: 332px;
  padding: 0.5rem;
  transition: all 150ms ease-out;
  font-family: Google Sans;
  &:focus {
    outline: none;
    border: 0.5px solid #191919;
  }
`;
