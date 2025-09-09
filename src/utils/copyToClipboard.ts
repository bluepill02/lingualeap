const copyToClipboard = async (text: string) => {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      return true; // Success
    } catch (error) {
      console.error("Failed to copy using navigator.clipboard:", error);
      return false; // Failure
    }
  } else {
    console.warn("navigator.clipboard is not supported in this environment.");
    return false; // Indicate that copy operation failed
  }
};

export { copyToClipboard };
