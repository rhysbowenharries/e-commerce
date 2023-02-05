import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Products from "@/components/Products/Products";

// @ts-ignore
export default function Home({ products }) {
  console.log("products", products);
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
        clear
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
        products(first: 10, channel: "uk") {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
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
                  start {
                    gross {
                      amount
                      currency
                    }
                  }
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
                type
                url(size: 1)
              }
            }
          }
          totalCount
        }
      }
    `,
  });
  console.log("data", data);

  return {
    props: {
      products: data,
    },
  };
}
