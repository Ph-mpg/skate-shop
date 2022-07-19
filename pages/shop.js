import ProductList from '../components/ProductList';
import getCommerce from "../utils/commerce";
import CategoryList from "../components/CategoryList"
import Layout from '../components/Layout';

export async function getStaticProps() {
    const commerce = getCommerce();
    const { data: products } = await commerce.products.list();
    const { data: categories } = await commerce.categories.list();
    return {
      props: {
        products,
        categories,
      },
    };
  }
  
  export default function Shop({ products, categories }) {
    return (
      <Layout title='Shop'>
         <div className="containerShop">
           <div className="containerCategoryItems">
           <CategoryList categories={categories}/>
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
      </Layout>
    );
  }

