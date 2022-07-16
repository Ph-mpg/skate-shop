import getCommerce from "../../utils/commerce";
import ProductList from "../../components/ProductList";
import CategoryList from "../../components/CategoryList";

export async function getStaticProps({ params }) {
  const { slug } = params;
  const commerce = getCommerce();
  const category = await commerce.categories.retrieve(slug, {
    type: "slug",
  });

  const { data: products } = await commerce.products.list({
    category_slug: [slug],
  });

  const { data: categories } = await commerce.categories.list();

  return {
    props: {
      category,
      products,
      categories,
    },
  };
}

export async function getStaticPaths() {
    const commerce = getCommerce();
    const { data: categories } = await commerce.categories.list();
  
    return {
      paths: categories.map((category) => ({
        params: {
          slug: category.slug,
        },
      })),
      fallback: false,
    };
  }

  export default function CategoryPage({ products, categories }) {

    return (
      <>
        <div className="containerShop">
           <div className="containerCategoryItems">
           <CategoryList categories={categories}/>
                <p className="numberOfItemsText">{products.length} items</p>
            </div> 
         </div>
        <ProductList products={products} />
        <section>
          <div className="pageShopImage">
            <div >
              <p>The latest products just for you. Right here.</p>
            </div>
          </div>
        </section>
      </>
    );
  }