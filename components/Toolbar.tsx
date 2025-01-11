import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ToolbarProps {
  onSave: () => void;
  onCancel: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onSave, onCancel }) => {
  return (
    <div className="bg-white border-b border-gray-200 p-2 flex items-center space-x-4">
      <Select defaultValue="class">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Diagram Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="class">Class Diagram</SelectItem>
          <SelectItem value="sequence">Sequence Diagram</SelectItem>
          <SelectItem value="usecase">Use Case Diagram</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex-1" />
      <Button variant="outline" onClick={onCancel}>Cancel</Button>
      <Button onClick={onSave}>Save</Button>
    </div>
  );
};

export default Toolbar;

