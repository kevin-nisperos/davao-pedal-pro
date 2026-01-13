import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("text-primary", className)}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50,10A40,40,0,1,0,90,50,40,40,0,0,0,50,10ZM50,82A32,32,0,1,1,82,50,32,32,0,0,1,50,82Z"
        className="text-primary fill-current"
      />
      <path
        d="M60 35H45V65H50V55H58C62.4183 55 66 51.4183 66 47C66 42.5817 62.4183 39 58 39H50V45H58C59.1046 45 60 45.8954 60 47C60 48.1046 59.1046 49 58 49H50V35H45Z"
        transform="translate(-2, 0)"
        className="fill-current text-accent"
      />
    </svg>
  );
}
