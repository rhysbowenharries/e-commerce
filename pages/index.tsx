import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Products from "@/components/Products/Products";
import { ProductsType } from "@/schema";

type Props = {
  data: { products: ProductsType };
  loading: boolean;
};

export default function Home({ loading, data }: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y overflow-scroll z-0 snap-proximity">
      <Head>
        <title>Rainbow Flower</title>
      </Head>

      <div id="sticky header container">
        <Header />
        <section id="hero" className="snap-start snap-always">
          <Hero />
        </section>
        <section id="about" className="snap-center snap-always">
          <About />
        </section>
      </div>
      <section id="products" className="snap-start snap-normal">
        <Products products={data.products} loading={loading} />
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
              }
              thumbnail {
                url
                alt
              }
              pricing {
                priceRange {
                  stop {
                    gross {
                      amount
                      currency
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  console.log("error", error);
  return {
    props: { loading, data },
  };
}
