export default function LoadingSpinner() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        <div className="text-gray-600">Loading...</div>
      </div>
    </div>
  );
}
