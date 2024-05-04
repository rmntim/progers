import { Input } from "~/components/ui/input";

export function SearchBar() {
  return (
    <div className="flex w-full items-center rounded-lg border p-2 shadow">
      <Input
        className="flex-1 border-none bg-transparent"
        placeholder="Find a room"
        type="text"
      />
      <SearchIcon className="text-gray-400" />
    </div>
  );
}
function SearchIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
