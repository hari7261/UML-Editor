'use client'

import { NodeModel, NodeModelGenerics, PortModelAlignment } from '@projectstorm/react-diagrams';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';

export interface ClassNodeModelOptions extends BaseModelOptions {
  name?: string;
  attributes?: string[];
  methods?: string[];
  type: 'class' | 'abstract' | 'interface';
}

export class ClassNodeModel extends NodeModel<NodeModelGenerics & ClassNodeModelOptions> {
  constructor(options: ClassNodeModelOptions) {
    super({
      ...options,
      type: options.type || 'class'
    });

    this.addPort('top', PortModelAlignment.TOP);
    this.addPort('right', PortModelAlignment.RIGHT);
    this.addPort('bottom', PortModelAlignment.BOTTOM);
    this.addPort('left', PortModelAlignment.LEFT);
  }
}

export const ClassNodeWidget: React.FC<{ node: ClassNodeModel }> = ({ node }) => {
  const { name = 'Class', attributes = [], methods = [], type } = node.getOptions();

  return (
    <div className="uml-class-node border-2 border-gray-400 bg-white">
      <div className="border-b-2 border-gray-400 p-2 font-bold text-center">
        {type === 'abstract' && <span className="italic">{'<<abstract>>'}</span>}
        {type === 'interface' && <span className="italic">{'<<interface>>'}</span>}
        <div>{name}</div>
      </div>
      <div className="border-b-2 border-gray-400 p-2">
        {attributes.map((attr, i) => (
          <div key={i} className="text-sm">+ {attr}</div>
        ))}
      </div>
      <div className="p-2">
        {methods.map((method, i) => (
          <div key={i} className="text-sm">+ {method}()</div>
        ))}
      </div>
    </div>
  );
};

