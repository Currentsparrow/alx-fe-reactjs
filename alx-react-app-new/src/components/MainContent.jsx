function MainContent() {
  return (
    <main style={{
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      marginBottom: '20px',
      lineHeight: '1.6'
    }}>
      <h2 style={{ color: '#333', fontSize: '2em', marginBottom: '15px' }}>About Our Application</h2>
      <div style={{
        border: '1px solid #bfc0c0',
        padding: '10px',
        marginTop: '18px',
        borderRadius: '6px',
        background: '#f6f6f6'
      }}>
        <span style={{ color: 'blue', fontWeight: 'bold', fontSize: '16px' }}>
          I love to visit New York, Paris, and Tokyo.
        </span>
      </div>
    </main>
  );
}

export default MainContent;