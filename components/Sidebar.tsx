import { Button } from '@/components/ui/button';

interface SidebarProps {
  onAddNode: (type: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onAddNode }) => {
  return (
    <div className="w-48 bg-gray-100 border-r border-gray-200 p-4">
      <div className="space-y-4">
        <div className="font-bold mb-2">Elements</div>
        <Button 
          className="w-full justify-start" 
          variant="outline"
          onClick={() => onAddNode('package')}
        >
          Package
        </Button>
        <Button 
          className="w-full justify-start" 
          variant="outline"
          onClick={() => onAddNode('class')}
        >
          Class
        </Button>
        <Button 
          className="w-full justify-start" 
          variant="outline"
          onClick={() => onAddNode('abstract')}
        >
          Abstract
        </Button>
        <Button 
          className="w-full justify-start" 
          variant="outline"
          onClick={() => onAddNode('interface')}
        >
          Interface
        </Button>
        <Button 
          className="w-full justify-start" 
          variant="outline"
          onClick={() => onAddNode('enumeration')}
        >
          Enumeration
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;

