import styled from 'styled-components';

function ProductItem({ product }) {
  return (
    <Wrapper color={product.color}>
      <Text>{product.id}</Text>
      <Text>{product.name}</Text>
      <Text>{product.year}</Text>
    </Wrapper>
  );
}
export default ProductItem;

const Wrapper = styled.div`
  background: ${(props) => props.color};
  display: flex;
  justify-content: space-between;
  width: 20rem;
  padding: 1rem;
  border-radius: 8px;
`;

const Text = styled.div`
  font-size: 1.5rem;
`;
