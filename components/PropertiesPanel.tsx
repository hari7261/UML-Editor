import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { DefaultNodeModel } from '@projectstorm/react-diagrams';

interface PropertiesPanelProps {
  selectedNode: DefaultNodeModel | null;
  onUpdateNode: (updates: any) => void;
}

const PropertiesPanel: React.FC<PropertiesPanelProps> = ({ selectedNode, onUpdateNode }) => {
  const [newAttribute, setNewAttribute] = useState('');
  const [newMethod, setNewMethod] = useState('');

  if (!selectedNode) return null;

  return (
    <div className="w-64 bg-gray-50 border-l border-gray-200 p-4">
      <h3 className="font-bold mb-4">Properties</h3>
      
      <div className="space-y-4">
        <div>
          <Label>Name</Label>
          <Input
            value={selectedNode.getOptions().name || ''}
            onChange={(e) => onUpdateNode({ name: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertiesPanel;

