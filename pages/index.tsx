import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Products from "@/components/Products/Products";
import { ProductsType } from "@/schema";

type Props = {
  products: ProductsType;
};

export default function Home({ products }: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Rainbow Flower</title>
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="products" className="snap-start">
        <Products products={products} />
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://twstg2.eu.saleor.cloud/graphql/",
    cache: new InMemoryCache(),
  });

  const { data, error, loading } = await client.query({
    query: gql`
      query products {
        products(first: 40, channel: "uk") {
          edges {
            node {
              id
              name
              description
              productType {
                name
                slug
              }
              slug
              rating
              thumbnail {
                url
                alt
              }
              pricing {
                onSale
                discount {
                  gross {
                    amount
                    currency
                  }
                }
                priceRange {
                  stop {
                    gross {
                      amount
                      currency
                    }
                  }
                }
              }
              media {
                id
                sortOrder
                alt
                url(size: 1)
              }
            }
          }
          totalCount
        }
      }
    `,
  });

  return {
    props: data,
  };
}
