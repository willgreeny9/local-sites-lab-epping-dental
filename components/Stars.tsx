export function Stars({ label = "5 out of 5 stars" }: { label?: string }) {
  return (
    <span className="stars" aria-label={label} role="img">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} aria-hidden="true">
          ★
        </span>
      ))}
    </span>
  );
}
