export default function FooterBackground() {
  return (
    <div
      className="footer-bg"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '40%',
          paddingBottom: '40%',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          right: '-8%',
          width: '50%',
          paddingBottom: '50%',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.03)',
        }}
      />
    </div>
  );
}
