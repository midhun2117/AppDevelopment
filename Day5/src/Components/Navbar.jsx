
import Footer from './Footer';
import Header from './Header';
import { useSelector } from 'react-redux';
import '../Assets/Home.css';

function Home() {
  const featuredProducts = useSelector((state) => state.featuredProducts.products);

  const wrapperStyle = {
    background: `url("data:image/jpeg;base64,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") center/cover no-repeat fixed`,
    minHeight: '100vh', // Ensure the background covers the entire viewport height
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Add a semi-transparent white background
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  // CSS style for aligning card images
  const cardImageStyle = {
    objectFit: 'cover', // This ensures the image covers the entire card
    objectPosition: 'center center', // Center the image within the card
    maxHeight: '100%', // Maintain the aspect ratio, adjust as needed
    maxWidth: '100%', // Maintain the aspect ratio, adjust as needed
  };

  return (
    <div className="wrapper" style={wrapperStyle}>
      <Header />

      <div className="container my-5" style={contentStyle}>
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center mb-3">Products</h1>
          </div>
        </div>

        <div className="row">
          {featuredProducts.map((product) => (
            <div className="col-md-3 mb-3" key={product.id} >
              <div className="card">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="card-img-top"
                  style={cardImageStyle} // Apply alignment styles here
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;