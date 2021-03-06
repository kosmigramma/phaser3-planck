import PhaserPlanck from '../src/index'
import Tests from './scenes/Tests'

// Tests
import Basic from './scenes/Basic'
import RevoluteJoint from './scenes/RevoluteJoint'

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    plugins: {
      scene: [
        {
          key: 'PhaserPlanck',
          plugin: PhaserPlanck,
          mapping: 'planck'
        }
      ]
    },
    scene: [Tests, Basic, RevoluteJoint]
};

new Phaser.Game(config)