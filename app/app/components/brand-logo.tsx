export default function BrandLogo() {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '100%', height: '100%' }}
    >
      {/* Outer ring */}
      <circle cx="60" cy="60" r="55" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />

      {/* Monogram "N" */}
      <text
        x="60"
        y="75"
        textAnchor="middle"
        fontFamily="Epilogue, sans-serif"
        fontWeight="900"
        fontSize="62"
        fill="rgba(255,255,255,0.92)"
        letterSpacing="-2"
      >
        N
      </text>

      {/* Tagline arc simulation — simple bottom text */}
      <text
        x="60"
        y="108"
        textAnchor="middle"
        fontFamily="Epilogue, sans-serif"
        fontWeight="400"
        fontSize="9"
        fill="rgba(255,255,255,0.45)"
        letterSpacing="3"
      >
        PORTFOLIO
      </text>
    </svg>
  );
}
