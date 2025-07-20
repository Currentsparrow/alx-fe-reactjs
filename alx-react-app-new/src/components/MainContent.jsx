function MainContent() {
  return (
    <main style={{
      border: '2px solid #bfc0c0',
      padding: '20px',
      margin: '20px',
      borderRadius: '10px',
      background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
    }}>
      <h2 style={{ color: '#0077b6', marginBottom: '12px', fontFamily: 'Arial, sans-serif' }}>Explore Cities</h2>
      <p style={{ fontSize: '17px', color: '#222', lineHeight: '1.6' }}>
        Discover interesting facts and highlights about your favorite cities around the world!
      </p>
    </main>
  );
}

export default MainContent;