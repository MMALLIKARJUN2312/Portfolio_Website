import { ImageResponse } from 'next/og';
import { profile } from '@/lib/content';

export const alt = `${profile.name} - ${profile.roles.join(' & ')}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: '80px',
        backgroundColor: '#0f172a',
        color: '#ffffff',
      }}
    >
      <div style={{ display: 'flex', fontSize: 28, color: '#93c5fd', fontWeight: 600 }}>
        {profile.roles.join(' · ')}
      </div>
      <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, marginTop: 24 }}>
        {profile.name}
      </div>
      <div
        style={{ display: 'flex', fontSize: 30, color: '#94a3b8', marginTop: 24, maxWidth: 900 }}
      >
        {profile.tagline}
      </div>
    </div>,
    { ...size },
  );
}
