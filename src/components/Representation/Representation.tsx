import RepresentationElement from 'ngl/declarations/component/representation-element';
import React, { useEffect, useRef } from 'react'
import { useComponent } from '../../hooks';
import { RepresentationDescriptor } from '../../utils';

export const Representation: React.FC<RepresentationDescriptor> = ({ type, params, children }) => {
  const component = useComponent();
  const representation = useRef(null);

  useEffect(() => {
    if (component) {
      if (representation.current !== null) {
        component.removeRepresentation(representation.current as any);
      }

      representation.current = component.addRepresentation(type, params);

    }
    return () => {
      if (component?.reprList && representation.current !== null) {
        component.removeRepresentation(representation.current as any)
      }
    }
  })

  return <>{children}</>
}
