import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Centro Podológico Ximena Alvarado en San José, Costa Rica';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#17151b',
          color: 'white',
          padding: '74px 82px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 58, height: 4, background: '#9f68cb' }} />
          <div style={{ fontSize: 24, color: '#d8c1e9', letterSpacing: 1 }}>SABANA NORTE · SAN JOSÉ</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2 }}>
            Centro Podológico<br />Ximena Alvarado
          </div>
          <div style={{ fontSize: 29, color: '#c6c1cb' }}>
            Atención podológica especializada · Costa Rica
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 22, color: '#bdb8c1' }}>
          <span>Martes a Domingo · 7:00 AM – 4:00 PM</span>
          <span style={{ color: '#c394e5' }}>centropodologicoximenaalvarado.com</span>
        </div>
      </div>
    ),
    size
  );
}
