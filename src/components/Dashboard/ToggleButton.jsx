import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTheme } from "../Theme/ThemeContext"; // Import the theme context

export function ToggleButton() {
  const { isDarkMode, setIsDarkMode } = useTheme(); // Access theme state and setter

  const handleChange = () => {
    setIsDarkMode(!isDarkMode); // Toggle dark mode
  };

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="theme-toggle" className="text-sm">
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </Label>
      <Switch
        id="theme-toggle"
        checked={isDarkMode} // Reflect the current theme
        onCheckedChange={handleChange} // Toggle on switch change
      />
    </div>
  );
}
export default ToggleButton