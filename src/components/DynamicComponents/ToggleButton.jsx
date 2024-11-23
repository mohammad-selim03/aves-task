import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTheme } from "../Theme/ThemeContext";

export function ToggleButton() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const handleChange = () => setIsDarkMode((prev) => !prev);

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="theme-toggle" className="text-sm">
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </Label>
      <Switch
        id="theme-toggle"
        checked={isDarkMode}
        onCheckedChange={handleChange}
      />
    </div>
  );
}

export default ToggleButton;
