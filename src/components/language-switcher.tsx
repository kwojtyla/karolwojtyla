import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BrazilFlag from "../../public/icons/brazil-flag";
import USFlag from "../../public/icons/us-flag";
import { useLanguage } from "@/providers/language-provider";
import { Loader2 } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage, isChanging } = useLanguage();

  return (
    <Select value={language} onValueChange={setLanguage} disabled={isChanging}>
      <SelectTrigger className="w-auto">
        {isChanging ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <SelectValue placeholder="Idioma" />
        )}
      </SelectTrigger>
      <SelectContent className="z-100">
        <SelectItem value="pt-br">
          <div className="flex items-center gap-2">
            <BrazilFlag size={20} />
          </div>
        </SelectItem>
        <SelectItem value="en">
          <div className="flex items-center gap-2">
            <USFlag size={20} />
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
