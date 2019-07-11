import * as React from 'react'
import { withFeaturesProvider } from 'feature-toggle-jsx'

import { WrappedComponent } from './Component'
import { WrappedComponentWithConfig } from './ComponentWithConfiguration'
import { WrappedComponent as DisabledComponent } from './DisabledComponent'
import { Features } from './types'

const features: Partial<Features> = {
  myFeature: {},
  myFeatureWithConfig: { items: ['this', 'is', 'my', 'example', 'config', 'items'] },
}

const FeatureToggleExamples: React.FC = () => {
  return (
    <>
      <WrappedComponent text="TEXT" />
      <DisabledComponent />
      <WrappedComponentWithConfig text="TEXT" number={3} />
    </>
  )
}

export default withFeaturesProvider(FeatureToggleExamples, features)