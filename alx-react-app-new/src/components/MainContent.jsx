function MainContent() {
  return (
    <main style={{
      background: 'linear-gradient(135deg, #e0eafc, #cfdef3)',
      padding: '30px',
      margin: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
    }}>
      <h2 style={{ color: '#2e3c6a', marginBottom: '15px' }}>Explore Cities</h2>
      <p style={{ fontSize: '18px', color: '#444' }}>
        Discover interesting facts and highlights about your favorite cities around the world!
      </p>
    </main>
  );
}

export default MainContent;