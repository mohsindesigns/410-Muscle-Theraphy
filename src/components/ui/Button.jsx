const GOLD = '#C8960C';
const DARK = '#0A0A0A';

const variants = {
  gold: {
    background: GOLD,
    color: DARK,
    border: 'none',
  },
  outline: {
    background: 'transparent',
    color: '#ffffff',
    border: '1px solid rgba(255,255,255,0.3)',
  },
  outlineDark: {
    background: 'transparent',
    color: DARK,
    border: `1px solid ${DARK}`,
  },
  dark: {
    background: DARK,
    color: '#ffffff',
    border: 'none',
  },
};

export default function Button({
  children,
  variant = 'gold',
  size = 'md',
  className = '',
  href,
  ...props
}) {
  const sizeStyles = size === 'sm'
    ? { padding: '10px 20px', fontSize: '12px' }
    : { padding: '14px 28px', fontSize: '13px' };

  const style = {
    ...variants[variant],
    ...sizeStyles,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '600',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'opacity 0.2s, background 0.2s',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  };

  if (href) {
    return (
      <a href={href} style={style} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button style={style} className={className} {...props}>
      {children}
    </button>
  );
}
