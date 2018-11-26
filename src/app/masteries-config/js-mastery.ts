import { Mastery } from './mastery';

export const jsMastery: Mastery = {
  levels: [
    {
      minTestsRequired: 4,
      level: 1,
      tests: [
        {
          name: 'Basic HTML'
        },
        {
          name: 'Basic JavaScript'
        },
        {
          name: 'Basic CSS'
        },
        {
          name: 'Basic Typescript'
        }
      ]
    },
    {
      minTestsRequired: 4,
      level: 2,
      tests: [
        {
          name: 'Basic Angular',
        },
        {
          name: 'Basic Node / express',
        },
        {
          name: 'Basic React',
        },
        {
          name: 'Basic Unit Tests',
        },
        {
          name: 'Basic Webpack',
        }
      ]
    }
  ]
};
