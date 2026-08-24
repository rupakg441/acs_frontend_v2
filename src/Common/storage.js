export const DEFAULT_THEME_SETTINGS = {
  logo_image: "",
  left_panel_color: "#00366B",
  right_panel_color: "#ffffff",
  button_color: "#e84455",
  logo_width: 85,
  logo_height: 85,
};

export const getStoredValue = (key, defaultValue) => {
  const value = localStorage.getItem(key);

  if (value === null || value === "undefined") {
    return defaultValue;
  }

  try {
    const parsedValue = JSON.parse(value);
    return parsedValue ?? defaultValue;
  } catch {
    return defaultValue;
  }
};
