import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus, possimus provident odit earum voluptates autem vero velit! Nisi beatae culpa sequi autem perferendis nesciunt nam eligendi esse et.</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}