type MaskMarkProps = {
  className?: string;
  size?: number;
  gradient?: boolean;
  title?: string;
};

/**
 * MaskWright mark: a forged mask. Brow tapers to a chin point, two angled eye
 * slits cut as negative space. One evenodd path so the eyes stay transparent
 * on any surface. Set gradient={false} to paint with currentColor.
 */
export function MaskMark({
  className,
  size = 32,
  gradient = true,
  title = "MaskWright",
}: MaskMarkProps) {
  const gradId = "mw-mark-grad";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      role="img"
      aria-label={title}
      className={className}
    >
      {gradient ? (
        <defs>
          <linearGradient
            id={gradId}
            x1="22"
            y1="15"
            x2="78"
            y2="88"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ff8a5c" />
            <stop offset="0.55" stopColor="#ff6a3d" />
            <stop offset="1" stopColor="#e8542a" />
          </linearGradient>
        </defs>
      ) : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={gradient ? `url(#${gradId})` : "currentColor"}
        d="M22 26C22 19 33 15 50 15C67 15 78 19 78 26C78 44 72 64 50 88C28 64 22 44 22 26ZM31 42L45 46L44 53L30 48L31 42ZM69 42L55 46L56 53L70 48L69 42Z"
      />
    </svg>
  );
}
