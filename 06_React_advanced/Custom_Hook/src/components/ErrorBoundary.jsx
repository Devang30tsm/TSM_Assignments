import React from "react";
import { MdError } from "react-icons/md";

class ErrorBoundary extends React.Component {
  state = { hasError: false, message: "" };

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error, info) {
    console.error("Widget error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-red-100/50 backdrop-blur border border-red-300 rounded-lg shadow-md flex items-center gap-4 text-red-700">
          <MdError size={28} />
          <div>
            <h3 className="font-bold text-lg">Widget Crashed</h3>
            <p>{this.state.message}</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
