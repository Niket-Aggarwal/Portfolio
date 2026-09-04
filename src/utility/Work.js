export const sendContactForm = async (formData) => {
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
  if (!GOOGLE_SCRIPT_URL) {
    console.error("VITE_GOOGLE_SCRIPT_URL environment variable is not set.");
    return {
      success: false,
      message: "Backend service URL is not configured. Please check your environment variables.",
    };
  }
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
};