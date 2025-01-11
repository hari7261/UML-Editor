import React, { useState, useEffect } from 'react';
import { DefaultNodeModel } from '@projectstorm/react-diagrams';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface NodePropertiesProps {
  node: DefaultNodeModel;
  updateNodeName: (name: string) => void;
}

const NodeProperties: React.FC<NodePropertiesProps> = ({ node, updateNodeName }) => {
  const [nodeName, setNodeName] = useState(node.getOptions().name || '');

  useEffect(() => {
    setNodeName(node.getOptions().name || '');
  }, [node]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNodeName(e.target.value);
    updateNodeName(e.target.value);
  };

  return (
    <div className="node-properties">
      <h3 className="text-lg font-semibold mb-2">Node Properties</h3>
      <div className="mb-4">
        <Label htmlFor="node-name">Node Name</Label>
        <Input
          id="node-name"
          value={nodeName}
          onChange={handleNameChange}
          placeholder="Enter node name"
        />
      </div>
    </div>
  );
};

export default NodeProperties;

