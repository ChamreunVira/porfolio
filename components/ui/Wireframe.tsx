import type { ReactNode } from 'react';
import type { WireframeVariant } from '@/data/portfolioData';

interface WireframeProps {
  variant: WireframeVariant;
  accentColor: string;
  label: string;
  className?: string;
}

const INK = '#1c1b19';
const PAPER = '#fbf9f4';
const MUTED = '#d9d3c3';

interface BlockProps {
  x: number;
  y: number;
  width: number;
  height: number;
  fill?: string;
}

function Block({ x, y, width, height, fill = PAPER }: BlockProps) {
  return <rect x={x} y={y} width={width} height={height} fill={fill} stroke={INK} strokeWidth={1.5} />;
}

interface LinesProps {
  x: number;
  y: number;
  widths: number[];
  gap?: number;
}

function Lines({ x, y, widths, gap = 12 }: LinesProps) {
  return (
    <g>
      {widths.map((width, lineIndex) => (
        <rect key={lineIndex} x={x} y={y + lineIndex * gap} width={width} height={5} fill={MUTED} />
      ))}
    </g>
  );
}

function BrowserFrame({ children }: { children: ReactNode }) {
  return (
    <g>
      <rect x={10} y={10} width={620} height={380} fill={PAPER} stroke={INK} strokeWidth={2} />
      <line x1={10} y1={42} x2={630} y2={42} stroke={INK} strokeWidth={1.5} />
      {[28, 44, 60].map((cx) => (
        <circle key={cx} cx={cx} cy={26} r={5} fill="none" stroke={INK} strokeWidth={1.5} />
      ))}
      <rect x={90} y={17} width={300} height={18} fill={MUTED} />
      {children}
    </g>
  );
}

function JournalScreen({ accentColor }: { accentColor: string }) {
  return (
    <BrowserFrame>
      <rect x={40} y={64} width={200} height={14} fill={accentColor} />
      <Lines x={40} y={92} widths={[330, 280, 200]} />
      {[0, 1, 2].map((row) => (
        <g key={row}>
          <Block x={40} y={160 + row * 70} width={52} height={52} fill={MUTED} />
          <Lines x={108} y={168 + row * 70} widths={[250, 190, 120]} />
        </g>
      ))}
      <Block x={410} y={64} width={190} height={300} />
      <rect x={428} y={84} width={80} height={8} fill={accentColor} />
      <Lines x={428} y={108} widths={[140, 120, 150, 110, 130, 100]} gap={18} />
    </BrowserFrame>
  );
}

function StorefrontScreen({ accentColor }: { accentColor: string }) {
  return (
    <BrowserFrame>
      <rect x={40} y={60} width={130} height={12} fill={accentColor} />
      {[0, 1].map((row) =>
        [0, 1, 2].map((column) => {
          const x = 40 + column * 190;
          const y = 90 + row * 145;
          return (
            <g key={`${row}-${column}`}>
              <Block x={x} y={y} width={170} height={95} fill={MUTED} />
              <Lines x={x} y={y + 106} widths={[120, 70]} />
              <rect x={x + 120} y={y + 106} width={50} height={12} fill={accentColor} />
            </g>
          );
        }),
      )}
    </BrowserFrame>
  );
}

function CheckoutScreen({ accentColor }: { accentColor: string }) {
  const qrCells = [0, 1, 2, 3, 4, 5].flatMap((row) =>
    [0, 1, 2, 3, 4, 5].filter((column) => (row * 7 + column * 3) % 3 !== 1).map((column) => ({ row, column })),
  );
  return (
    <BrowserFrame>
      <rect x={40} y={64} width={150} height={14} fill={accentColor} />
      {[0, 1, 2].map((row) => (
        <g key={row}>
          <Block x={40} y={100 + row * 76} width={56} height={56} fill={MUTED} />
          <Lines x={110} y={110 + row * 76} widths={[200, 140]} />
        </g>
      ))}
      <Block x={410} y={64} width={190} height={250} />
      {qrCells.map(({ row, column }) => (
        <rect key={`${row}-${column}`} x={430 + column * 25} y={82 + row * 25} width={20} height={20} fill={INK} />
      ))}
      <rect x={410} y={330} width={190} height={34} fill={accentColor} />
    </BrowserFrame>
  );
}

function DashboardScreen({ accentColor }: { accentColor: string }) {
  const barHeights = [70, 110, 90, 150, 120, 170, 140];
  return (
    <BrowserFrame>
      <Block x={30} y={60} width={110} height={312} />
      <Lines x={44} y={80} widths={[70, 80, 60, 74, 66]} gap={22} />
      {[0, 1, 2].map((column) => (
        <g key={column}>
          <Block x={160 + column * 148} y={60} width={136} height={66} />
          <rect x={174 + column * 148} y={76} width={50} height={8} fill={MUTED} />
          <rect x={174 + column * 148} y={94} width={70} height={16} fill={accentColor} />
        </g>
      ))}
      <Block x={160} y={142} width={448} height={230} />
      {barHeights.map((barHeight, barIndex) => (
        <rect
          key={barIndex}
          x={186 + barIndex * 58}
          y={352 - barHeight}
          width={34}
          height={barHeight}
          fill={accentColor}
          opacity={0.85}
        />
      ))}
    </BrowserFrame>
  );
}

function FeedScreen({ accentColor }: { accentColor: string }) {
  return (
    <BrowserFrame>
      <Lines x={36} y={72} widths={[80, 64, 72, 56]} gap={26} />
      {[0, 1].map((post) => (
        <g key={post}>
          <Block x={170} y={62 + post * 160} width={260} height={148} />
          <circle cx={198} cy={90 + post * 160} r={14} fill={MUTED} stroke={INK} strokeWidth={1.5} />
          <Lines x={222} y={82 + post * 160} widths={[120, 70]} />
          <Block x={186} y={120 + post * 160} width={228} height={60} fill={MUTED} />
          <rect x={186} y={190 + post * 160} width={44} height={8} fill={accentColor} />
        </g>
      ))}
      <Block x={450} y={62} width={160} height={200} />
      {[0, 1, 2].map((request) => (
        <g key={request}>
          <circle cx={474} cy={92 + request * 58} r={11} fill={MUTED} stroke={INK} strokeWidth={1.5} />
          <Lines x={494} y={86 + request * 58} widths={[80]} />
          <rect x={494} y={102 + request * 58} width={36} height={12} fill={accentColor} />
          <rect x={536} y={102 + request * 58} width={36} height={12} fill={MUTED} stroke={INK} strokeWidth={1} />
        </g>
      ))}
    </BrowserFrame>
  );
}

function MobileScreen({ accentColor }: { accentColor: string }) {
  return (
    <g>
      {[150, 350].map((x) => (
        <g key={x}>
          <rect x={x} y={20} width={140} height={360} fill={PAPER} stroke={INK} strokeWidth={2} />
          <line x1={x + 50} y1={34} x2={x + 90} y2={34} stroke={INK} strokeWidth={3} />
          <rect x={x + 14} y={56} width={70} height={10} fill={accentColor} />
          <Block x={x + 14} y={80} width={112} height={80} fill={MUTED} />
          <Lines x={x + 14} y={176} widths={[112, 90, 100]} gap={14} />
          <Block x={x + 14} y={232} width={112} height={52} />
          <Lines x={x + 24} y={246} widths={[80, 60]} />
          <rect x={x + 14} y={326} width={112} height={32} fill={accentColor} />
        </g>
      ))}
    </g>
  );
}

const screensByVariant: Record<WireframeVariant, (props: { accentColor: string }) => ReactNode> = {
  journal: JournalScreen,
  storefront: StorefrontScreen,
  checkout: CheckoutScreen,
  dashboard: DashboardScreen,
  feed: FeedScreen,
  mobile: MobileScreen,
};

/** Clean SVG wireframe that stands in for a real screenshot. */
export function Wireframe({ variant, accentColor, label, className }: WireframeProps) {
  const Screen = screensByVariant[variant];

  return (
    <svg viewBox="0 0 640 400" role="img" aria-label={label} className={className ?? 'block h-auto w-full'}>
      <Screen accentColor={accentColor} />
    </svg>
  );
}
