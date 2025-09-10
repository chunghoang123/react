import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-40">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-500"></div>
      {/* Text */}
      <span className="ml-3 text-blue-600 font-medium">Đang tải...</span>
    </div>
  );
}
