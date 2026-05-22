import beeImg from "@/assets/bee-doctor.png";

type Props = { className?: string; size?: number };

// Friendly doctor bee mascot (uses the provided artwork).
export function Bee({ className = "", size = 72 }: Props) {
  return (
    <img
      src={beeImg}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={`object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.18)] ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
